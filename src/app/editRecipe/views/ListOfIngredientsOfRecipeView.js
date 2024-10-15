import React from 'react';


import Ingredient from '../../Ingredient/Ingredient';

const ListOfIngredientsOfRecipeView = (props) => {

    const ingredients = props.ingredients
    const items = props.items
    const remove = props.remove
    const edit = props.edit

    return (
        <div id='ListOfIngredietOfShoppingListDiv'>
            {ingredients.map(ing => (<dl><Ingredient
                remove={remove}
                edit={edit}
                ingredient={ing}
                items={items}
            />
            </dl>))}
        </div>
    )

}

export default ListOfIngredientsOfRecipeView

