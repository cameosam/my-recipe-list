import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import dotenv from "dotenv";
import recipeRouter from "./routes/recipe.js";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

const URI = process.env.ATLAS_URI;

mongoose.connect(URI, {
  useNewUrlParser: true,
  useCreateIndex: true,
  useUnifiedTopology: true,
});

const connection = mongoose.connection;
connection.once("open", () => {
  console.log("MongoDB connection established");
});

app.use("/recipes", recipeRouter);

app.listen(PORT, () => {
  console.log(`Listening on PORT: ${PORT}`);
});
