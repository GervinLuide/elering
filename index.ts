import express, { Express, Request, Response } from "express";
import cors from "cors";
import nordpoolController from "./controllers/nordpool";

const app: Express = express();
app.use(cors())

app.get('/', (req: Request, res: Response) => {
    res.send('Express + TypeScript Server');
});
app.use('/', nordpoolController)
app.listen(3000,() => {
    console.log(`[server]: Server is running at http://localhost:3000`);
});