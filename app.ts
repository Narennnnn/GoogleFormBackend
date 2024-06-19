// app.ts
import express, { Request, Response } from 'express';
import bodyParser from 'body-parser';
import { pingHandler, submitHandler, readHandler, searchByEmailHandler } from './routes/index';

const app = express();
const PORT = 3000;
const dbPath = './db.json';

app.use(bodyParser.json());

// Routes
app.get('/ping', pingHandler);
app.post('/submit', submitHandler);
app.get('/read', readHandler);
app.get('/searchByEmail', searchByEmailHandler); 

// Error handling middleware
app.use((err: any, req: Request, res: Response, next: express.NextFunction) => {
    console.error(err.stack);
    res.status(500).json({ error: 'Internal Server Error' });
});

// Start server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
