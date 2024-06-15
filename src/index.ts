import express, { Express, Request, Response } from "express";
import dotenv from "dotenv";
import connectDB from "./config/db";

dotenv.config();

const app: Express = express();
const port = process.env.PORT || 3000;

app.get("/", (req: Request, res: Response) => {
  res.send("Express Server");
});

app.listen(port, () => {
  connectDB();
  console.log(`[server]: Server is running at http://localhost:${port}`);
});