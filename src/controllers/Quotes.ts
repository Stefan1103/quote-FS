import Quotes from "../models/Quotes";
import axios from "axios";
import { IQuotes } from "../library/interfaces";
import Logging from "../library/Logging";
import { NextFunction, Request, Response } from "express";

const getAllQuotes = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const results = await Quotes.find().limit(10);
    res.status(200).json({ results });
    return results;
  } catch (error) {
    res.status(500).json({ error });
  }
};

const getRandomQuote = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const results = await Quotes.aggregate([{ $sample: { size: 1 } }]);
    res.status(200).json({ results });
    return results;
  } catch (error) {
    res.status(500).json({ error });
  }
};
export default { getRandomQuote, getAllQuotes };
