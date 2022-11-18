const recipesModel = require("../models/recipesModel")

function getRecipes (req, res) {
    responseArray = recipesModel.allRecipesAbridged()
    if (responseArray.length <= 0) {
        return res.status(404).send("Couldn't find any recipes")
    }
    return res.status(200).json(responseArray)
} 

function getRecipeById (req, res) {
    const singleRecipe = recipesModel.getOneRecipe(req.params.recipeId)
    if (singleRecipe) {
       return res.status(200).json(singleRecipe)
    }
    if (!singleRecipe) {
       return res.status(404).send("The recipe you're looking for does not exist")
    }
}
function postRecipe (req, res) {
    const {title, description, servings, ingredients, steps } = req.body
    if (!title || !description || !servings || !ingredients || !steps){
        return res.status(400).send("Important information is missing. Must send valid information.")
    }
    const newRecipe = recipesModel.createNewRecipe(title, description, ingredients, steps, servings)
    recipesModel.addNewRecipe(newRecipe)
    return res.status(201).json(newRecipe);
}

module.exports = {
    getRecipes,
    getRecipeById,
    postRecipe
}