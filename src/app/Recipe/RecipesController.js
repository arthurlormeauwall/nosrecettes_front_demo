import React from 'react';

import RecipesView from "./views/RecipesView";
import { useEffect, useState } from 'react';

const RecipesController = (props) => {
    const client = props.client

    const [recipes, setRecipes] = useState([])
    const [items, setItems] = useState([])
    useEffect(() => {
        client.retrieveRecipes()
            .then((data) => {
                setRecipes(data);
            });
    }, []);
    useEffect(() => {
        client.retrieveItems()
            .then((data) => {
                setItems(data);
            });
    }, []);

    function addRecipeToMenu(id) {

        client.addRecipeToMenu([id])
    }


    const [selectedRecipes, setSelectedRecipes] = useState([...recipes])
    const getSource = (recipe) => {
        if (recipe.source.match('^https?:\\/\\/')) {
            return recipe.source
        }
        else {
            return "https://" + recipe.source
        }
    }
    const getRecipes = () => {
        var recipesToDisplay;
        if (selectedRecipes.length != 0) {
            recipesToDisplay = selectedRecipes
        } else {
            recipesToDisplay = recipes
        }
        recipesToDisplay = recipesToDisplay.sort((a, b) => {
            const nameA = a.name.toUpperCase();
            const nameB = b.name.toUpperCase();
            if (nameA < nameB) {
                return -1;
            }
            if (nameA > nameB) {
                return 1;
            }
            return 0;
        })
        return recipesToDisplay
    }

    const filterRecipes = (recipes) => {
        setSelectedRecipes(recipes)
    }


    function recipeCreatedCallback(recipe) {
        if (recipe != undefined) {
            if (recipe.typeOfAction != undefined) {
                let realRecipe = recipe.data
                if (recipe.typeOfAction == "add") {
                    client.addRecipeToMenuUpdateAndForceSync(realRecipe, realRecipe.id)
                }
                if (recipe.id != undefined) {
                    client.updateRecipeAndForceSync(realRecipe, realRecipe.id)
                } else {
                    client.updateRecipe(realRecipe)
                }

            } else {
                if (recipe.id != undefined) {
                    client.updateRecipeAndForceSync(recipe, recipe.id)
                } else {
                    client.updateRecipe(recipe)
                }

            }
        }
        setSelectedRecipes(recipes)
    }

    return <RecipesView
        callback={recipeCreatedCallback}
        recipes={recipes}
        add={addRecipeToMenu}
        getSource={getSource}
        recipesToDisplay={getRecipes()}
        filterRecipes={filterRecipes}
        items={items}
        client={client}
    />
}

export default RecipesController

