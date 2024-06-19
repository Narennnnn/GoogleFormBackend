# Slidely-AI Google Form Backend 

This repository contains a backend server built with Express.js and TypeScript for handling form submissions. It utilizes a JSON file as a database (`db.json`) to store form submissions.

## Prerequisites

Before running the server, ensure you have Node.js and npm (Node Package Manager) installed.

## Installation

Clone the repository and install dependencies:

```bash
git clone https://github.com/Narennnnn/GoogleFormBackend.git
```

```bash
npm install
```

## Running the Server
```bash
npm start
```
#### The server will start at http://localhost:3000.

## Endpoints 
### 1. Ping Endpoint 
```bash
http://localhost:3000/ping
```
### 2. Submit Endpoint
```bash
http://localhost:3000/submit
```
##### Request Body
```bash
{
  "name": "Narendra Maurya",
  "email": "nmaurya.engineer@gmail.com",
  "phone": "1234567890",
  "github_link": "https://github.com/Narennnnn",
  "stopwatch_time": "00:10:00"
}
```

### 3.Read Endpoint
```bash
http://localhost:3000/read?index=1
```

### 4. Search By EMail-ID
```bash
http://localhost:3000/searchByEmail?email=nmaurya.engineer@gmail.com
```
