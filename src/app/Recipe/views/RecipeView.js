import React from 'react';


const Recipe = (props) => {
    const recipe = props.recipe

    return (
        <div id='RecipeDiv'>
            {recipe.name}
        </div>
    )
}

export default Recipe
