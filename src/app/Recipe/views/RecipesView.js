import React from 'react';

import SearchWithRegex from '../../util/utilComponent/SearchWithRegex'
import RecipeWithFunctionality from './RecipeWithFunctionalityView';
import EditRecipe from '../../editRecipe/EditRecipe';
import ChainActionBuilder from '../../util/behavioralComponent/ChainActionBuilder';
import AddRecipeButton from '../../addRecipe/views/AddRecipeButton';
import AddNewRecipe from '../../addRecipe/AddNewRecipe';

const RecipesView = (props) => {

    const add = props.add
    const getSource = props.getSource
    const recipesToDisplay = props.recipesToDisplay
    const filterRecipes = props.filterRecipes
    const callback = props.callback
    const items = props.items
    const client = props.client
    const recipes=props.recipes

    return (
        <div>
            <ChainActionBuilder
                inputs={recipesToDisplay}
                onSubmit={callback}
                firstComponent={RecipeWithFunctionality}
                secondcomponents={{"editRecipe":()=>EditRecipe, "createRecipe":()=>AddNewRecipe}}
                propsToPassToFirstComponent={{ add: add, source: getSource, filterRecipes: filterRecipes, allRecipes:recipes }}
                propsToPassToSecondComponent={{ items: items, client: client }}
            />
        </div>
    )

}

export default RecipesView

