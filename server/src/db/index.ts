import mongoose from "mongoose";
const dotenv = require("dotenv");

dotenv.config();

export async function connectToDB() {
  try {
    const DB_URL = process.env.MONGODB_URL;
    if (!DB_URL) {
      throw new Error("[server/src/db/index.ts]: DB_URL not found in .env file");
    }
    await mongoose.connect(DB_URL as string);
    console.log("[server/src/db/index.ts]: Connected to DB!");
  } catch (e) {
    console.log("[server/src/db/index.ts]: Failed to connect with DB, try to connect to your personal wifi :)");
  }
}
