import express from "express";
import Recipe from "../models/recipe.model.js";

const recipeRouter = express.Router();

recipeRouter.route("/user/:userId").get((req, res) => {
  Recipe.find({ userId: req.params.userId })
    .then((recipe) => res.json(recipe))
    .catch((e) => res.status(400).json("Error: " + e));
});

recipeRouter.route("/").get((req, res) => {
  Recipe.find()
    .then((recipe) => res.json(recipe))
    .catch((e) => res.status(400).json("Error: " + e));
});

recipeRouter.route("/create").post((req, res) => {
  const title = req.body.title;
  const userId = req.body.userId;
  const source = req.body.source;
  const ingredients = req.body.ingredients;
  const notes = req.body.notes;
  const steps = req.body.steps;
  const cooking_time = req.body.cooking_time;
  const rating = req.body.rating;

  const newRecipe = new Recipe({
    title,
    userId,
    source,
    ingredients,
    notes,
    steps,
    cooking_time,
    rating,
  });

  newRecipe
    .save()
    .then(() => res.json("New recipe added!"))
    .catch((e) => res.status(400).json("Error: " + e));
});

recipeRouter.route("/:id").get((req, res) => {
  Recipe.findById(req.params.id)
    .then((recipe) => res.json(recipe))
    .catch((e) => res.status(400).json("Error: " + e));
});

recipeRouter.route("/delete/:id").delete((req, res) => {
  Recipe.findByIdAndDelete(req.params.id)
    .then(() => res.json("Recipe deleted!"))
    .catch((e) => res.status(400).json("Error: " + e));
});

recipeRouter.route("/edit/:id").patch((req, res) => {
  Recipe.findById(req.params.id)
    .then((recipe) => {
      recipe.title = req.body.title;
      recipe.source = req.body.source;
      recipe.ingredients = req.body.ingredients;
      recipe.notes = req.body.notes;
      recipe.steps = req.body.steps;
      recipe.cooking_time = req.body.cooking_time;
      recipe.rating = req.body.rating;

      recipe
        .save()
        .then(() => res.json("Recipe updated!"))
        .catch((e) => res.status(400).json("Error: " + e));
    })
    .catch((e) => res.status(400).json("Error: " + e));
});

export default recipeRouter;
