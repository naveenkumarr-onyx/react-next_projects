import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import { connectDb } from "./config/db.js";
import user from "./routes/userRoutes.js";

const app = express();
app.get("/", (req, res) => {
  res.send("Hello, World!");
});
dotenv.config();
app.use(express.json());
mongoose.connect(process.env.MONGODB_URI);
connectDb();
app.use("/user", user);

app.listen(process.env.PORT, () => {
  console.log("Server is running on port 5000");
});
