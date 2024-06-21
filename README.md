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
![image](https://github.com/Narennnnn/GoogleFormBackend/assets/120191897/6262857a-d85b-4cf8-ae9a-4e5ebbfaac1f)

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
![image](https://github.com/Narennnnn/GoogleFormBackend/assets/120191897/ff704712-26a7-4c9b-8706-a91fc90e4f2c)



### 3.Read Endpoint
```bash
http://localhost:3000/read?index=1
```
![image](https://github.com/Narennnnn/GoogleFormBackend/assets/120191897/326f948c-da90-4aad-b681-d76f84cf4a82)


### 4. Search By EMail-ID
```bash
http://localhost:3000/searchByEmail?email=nmaurya.engineer@gmail.com
```

![image](https://github.com/Narennnnn/GoogleFormBackend/assets/120191897/209989d6-d569-44e9-9ad9-c020284e68e9)

