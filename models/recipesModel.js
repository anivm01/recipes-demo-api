const fs = require ("fs");
const filePath = "./data/recipes.json"


function getAllRecipes () {
    const recipesFile = fs.readFileSync(filePath)
    const recipesData = JSON.parse(recipesFile)
    return recipesData
}

function allRecipesAbridged () {
    const recipes = getAllRecipes()
    const responseArray = recipes.map(recipe => {
        return {
            "id": recipe.id,
            "title": recipe.title,
            "img": recipe.img,
            "description": recipe.description
        }
    })
    return responseArray
}

function getOneRecipe (recipeId) {
    const recipes = getAllRecipes()
    const singleRecipe = recipes.find((recipe) => recipe.id === recipeId);
    return singleRecipe
}

function createNewRecipe (title, description, ingredients, steps, servings) {
    const allRecipes = getAllRecipes();
    const newId = Number(allRecipes[allRecipes.length-1].id) + 1
    const newRecipe = {
        title: title,
        image: "http://localhost:8000/images/image9.jpeg",
        description: description,
        ingredients: ingredients,
        steps: steps,
        servings: servings,
        timestamp: Date.now(),
        id: newId
      };
      return newRecipe
}

function addNewRecipe (newRecipe) {
    const recipes = getAllRecipes();
      recipes.push(newRecipe);
      fs.writeFileSync(filePath, JSON.stringify(recipes));
}

module.exports = { 
    getAllRecipes, 
    allRecipesAbridged, 
    getOneRecipe,
    createNewRecipe,
    addNewRecipe
 }