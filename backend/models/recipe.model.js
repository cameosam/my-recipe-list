import mongoose from "mongoose";

const Schema = mongoose.Schema;

const recipeSchema = new Schema({
  title: { type: String, required: true },
  userId: { type: String, required: true },
  source: { type: String, required: false },
  notes: { type: String, required: false },
  ingredients: [
    {
      name: String,
      amount: Number,
      unit: String,
    },
  ],
  steps: { type: Array, required: false },
  cooking_time: { type: String, required: false },
  rating: { type: Number, required: false },
});

const Recipe = mongoose.model("Recipe", recipeSchema);

export default Recipe;
