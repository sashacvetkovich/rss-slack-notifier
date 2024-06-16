import { Request, Response } from "express";
import mongoose from "mongoose";

export const checkMongoHealth = (req: Request, res: Response) => {
  const state = mongoose.connection.readyState;

  res.status(200).json({
    dbStatus: mongoose.STATES[state],
  });
};
