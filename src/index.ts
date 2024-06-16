import express from "express";
// Routes
import { checkMongoHealth } from "./routes/healthCheck";
// Utils
import connectDB from "./config/db";
import dotenv from "dotenv";
import logger from "./utils/logger";
import "./jobs/cronJobs";

dotenv.config();

const app = express();
const port = process.env.PORT || 8000;

// Health check route
app.get("/health", checkMongoHealth);

app.listen(port, () => {
  connectDB();
  logger.info(`Server is listening on port: ${port}`);
});
