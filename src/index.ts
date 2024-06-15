import express, { Express, Request, Response } from "express";
import dotenv from "dotenv";
import connectDB from "./config/db";
import logger from "./utils/logger";
import { fetchFeeds } from "./services/rssService";

dotenv.config();

const app: Express = express();
const port = process.env.PORT || 3000;

app.get("/", (req: Request, res: Response) => {
  res.send("Express Server");
});

app.listen(port, () => {
  connectDB();
  logger.info(`Server is listening on port: ${port}`);
  fetchFeeds()
});
