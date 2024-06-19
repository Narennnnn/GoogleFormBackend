import { Request, Response } from 'express';
import * as fs from 'fs';
import path from 'path';

const dbPath = path.join(__dirname, '../../db.json'); // Adjust path as per your actual structure

export const pingHandler = (req: Request, res: Response) => {
    res.json({ success: true });
};

export const submitHandler = (req: Request, res: Response) => {
    const { name, email, phone, github_link, stopwatch_time } = req.body;
    if (!name || !email || !phone || !github_link || !stopwatch_time) {
        return res.status(400).json({ error: 'All fields are required' });
    }

    const newSubmission = { name, email, phone, github_link, stopwatch_time };

    fs.readFile(dbPath, 'utf-8', (err, data) => {
        if (err) {
            console.error(err);
            return res.status(500).json({ error: 'Failed to read database' });
        }

        let db = JSON.parse(data);
        db.submissions.push(newSubmission);

        fs.writeFile(dbPath, JSON.stringify(db, null, 2), (err) => {
            if (err) {
                console.error(err);
                return res.status(500).json({ error: 'Failed to write to database' });
            }

            res.json({ success: true, submission: newSubmission });
        });
    });
};

export const readHandler = (req: Request, res: Response) => {
    const { index } = req.query;

    fs.readFile(dbPath, 'utf-8', (err, data) => {
        if (err) {
            console.error(err);
            return res.status(500).json({ error: 'Failed to read database' });
        }

        const db = JSON.parse(data);
        if (index === undefined || isNaN(Number(index)) || Number(index) < 0 || Number(index) >= db.submissions.length) {
            return res.status(400).json({ error: 'Invalid index' });
        }

        res.json({ success: true, submission: db.submissions[Number(index)] });
    });
};

export const searchByEmailHandler = (req: Request, res: Response) => {
    const { email } = req.query;

    fs.readFile(dbPath, 'utf-8', (err, data) => {
        if (err) {
            console.error(err);
            return res.status(500).json({ error: 'Failed to read database' });
        }

        const db = JSON.parse(data);
        const filteredSubmissions = db.submissions.filter((submission: any) => submission.email === email);

        res.json({ success: true, submissions: filteredSubmissions });
    });
};
