import { NextApiRequest, NextApiResponse } from "next";

export const timer = (time: number) =>
    new Promise((resolve) => setTimeout(resolve, time))

export const cors = (req: NextApiRequest, res: NextApiResponse, next: () => void) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET,OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
  next();
}
