import React from 'react';


const MenuView = (recipeProps) => {
    const menuRecipes = recipeProps.elements
    const remove = recipeProps.propsToPass.remove
    const forceSync = recipeProps.propsToPass.forceSync
    const edit = recipeProps.callback
    return (
        menuRecipes.map(recipe => <div id='MenuRecipeDiv'>
            <dl>
                <dt key={recipe.name}>{recipe.name}
                    <button type="submit" onClick={() => forceSync(recipe.id)} > force sync</button>
                    <button type="submit" onClick={() => remove(recipe.id)} >remove</button>
                    <button type="submit" onClick={() => edit(recipe, "editRecipe")}>edit</button></dt>
            </dl>
        </div>
        )
    )
}

export default MenuView
