import express, { Express, Request, Response } from "express";
import dotenv from "dotenv";
import { connectToDB } from "./db";
import v1router from "./api/v1/event";

dotenv.config();

const app: Express = express();
const port = process.env.PORT || 3000;

connectToDB();

// middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// root route
app.get("/", (req: Request, res: Response) => {
  res.send({
    message: "Welcome to evnt.press server!",
    api_docs: "https://expressjs.com/en/5x/api.html",
    routes: {
      "/api/v1/event": "To get all the events from version 1 API",
      "/api/v1/event/:id": "To get a single event from version 1 API",
    },
  });
});

app.use("/api/v1", v1router);

app.listen(port, () => {
  console.log(`[server]: Server is running at http://localhost:${port}`);
});
