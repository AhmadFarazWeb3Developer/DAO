import mongoose from "mongoose";
import { DB_NAME } from "../Constants/dbName.js";

import dotenv from "dotenv";
dotenv.config({ path: ".env" });
const MONGODB_URL = process.env.MONGODB_URL;

const connectDB = async () => {
  const connectionInstance = await mongoose.connect(
    `${MONGODB_URL}/${DB_NAME}`
  );
  console.log("Database Connected to", connectionInstance.connection.host);
};

export { connectDB };
