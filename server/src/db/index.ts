import mongoose from "mongoose";
const dotenv = require("dotenv");

dotenv.config();

export async function connectToDB() {
  try {
    const DB_URL = process.env.MONGODB_URL;
    await mongoose.connect(DB_URL as string);
    console.log("Connected to DB!");
  } catch (e) {
    console.log("Failed to connect to DB!", e);
  }
}
