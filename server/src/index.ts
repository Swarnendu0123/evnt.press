import express, { Express, Request, Response } from "express";
import dotenv from "dotenv";
import { connectToDB } from "./db";

dotenv.config();

const app: Express = express();
const port = process.env.PORT || 3000;

connectToDB();

app.get("/", (req: Request, res: Response) => {
  res.send({
    message: "Welcome to evnt.press server!",
    routes: {
      "/api/v1/event": "To get all the events from version 1 API",
      "/api/v1/event/:id": "To get a single event from version 1 API",
    },
  });
});

app.listen(port, () => {
  console.log(`[server]: Server is running at http://localhost:${port}`);
});
