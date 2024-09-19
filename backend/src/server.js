import express, { json } from "express";
import dotenv from "dotenv";
dotenv.config(".env");
import cors from "cors";
import { connectDB } from "./Database/dbConnection.js";
import { signupRouter } from "./Routes/signup.routes.js";
import { loginRouter } from "./Routes/loginUser.routes.js";

const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.json());
app.use(
  cors({
    origin: "http://localhost:3000",
    credentials: true,
  })
);
app.use("/api/users", signupRouter);
app.use("/api/users", loginRouter);
connectDB().then(() => {
  app.listen(PORT, (req, res) => {
    console.log("Connect to Port : ", PORT);
  });
});
