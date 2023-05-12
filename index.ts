import express, { Express, Request, Response } from 'express';
import dotenv from 'dotenv';

dotenv.config();

const PORT = process.env.PORT;
const HOST = process.env.HOST;
const STATICS = process.env.STATICS;

console.log(__dirname, PORT, HOST, STATICS)
const app: Express = express();

app.use(express.static(__dirname + STATICS));

app.get("/", (req: Request, res: Response) => {
    res.send('Express + TypeScript Server');
});

app.listen(PORT, () => console.log(`⚡️[server]: Server is running at ${HOST}:${PORT}`));
