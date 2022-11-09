const express = require('express');
const router = express.Router();
const recipesController = require("../controllers/recipesController");

router
.get("/", recipesController.getRecipes)
.get("/:recipeId", recipesController.getRecipeById)
.post("/", recipesController.postRecipe)

module.exports = router