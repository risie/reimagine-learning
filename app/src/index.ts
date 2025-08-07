import express, { Request, Response } from "express";
import dotenv from "dotenv";

dotenv.config();

const app = express();
const port = process.env["PORT"];

app.get("/health", (_req: Request, res: Response) => res.send("OK"));

app.listen(port, () => {
  console.log(`API listening on port ${port}`);
});
