import express from "express";
import mongoose from "mongoose";
import authRoutes from "./routes/auth.route.js";
import userRoutes from "./routes/user.route.js";
import { configDotenv } from "dotenv";
const app = express();
app.use(express.json());
app.get("/", (req, res) => {
  res.send("Hello World");
});
configDotenv.apply();
const connectionString = process.env.CONNECTION_STRING;
const port = process.env.PORT;
app.use("/api/auth", authRoutes);
app.use("/api/user", userRoutes);
mongoose.connect(connectionString, {}).then(() => {
  console.log("database connected");
  app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
  });
});
