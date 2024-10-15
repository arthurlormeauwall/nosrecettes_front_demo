import React, { useState, useEffect } from 'react';
import EditRecipe from '../editRecipe/EditRecipe';
import ChainActionBuilder from '../util/behavioralComponent/ChainActionBuilder';
import SearchRecipeView from '../searchRecipe/SearchRecipeView'

const SearchAndEditRecipe = (props) => {
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


    function recipeCreatedCallback(recipe) {
        console.log("recipe with name :" + recipe.name + " edited")
        client.updateRecipeAndForceSync(recipe, recipe.id)
    }

    return <ChainActionBuilder
            inputs={recipes}
            onSubmit={recipeCreatedCallback}
            firstComponent={SearchRecipeView}
            secondcomponents={{"editRecipe":()=>EditRecipe}}
            propsToPassToSecondComponent={{ items: items, client: client }}
        />
    
}

export default SearchAndEditRecipe