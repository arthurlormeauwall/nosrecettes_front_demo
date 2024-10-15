import React from 'react';

import ShoppingListIngredientListView from './views/ShoppingListIngredientListView';
const ShoppingListIngredientList = (props) => {

    const ingredients = props.ingredients
    const items = props.items
    const remove = props.remove
    const edit = props.edit
    const setToZero = props.setToZero

    const renderIngredientsWithoutZero = ingredients.filter(ing => ing.quantity != 0)
    const renderIngredientsWithZero = ingredients.filter(ing => ing.quantity == 0)

    const getIngredienPerType = (ingredients) => {
        let ingredientPerType = {};
        ingredients.forEach(ingredient => {
            let type = items.filter(it => it.id == ingredient.itemId)[0].type;
            if (ingredientPerType[type]) {
                ingredientPerType[type] = [...ingredientPerType[type], ingredient];
            } else {
                ingredientPerType[type] = [ingredient];
            }
        });
        return ingredientPerType;
    }

    return <ShoppingListIngredientListView
        items={items}
        remove={remove}
        edit={edit}
        setToZero={setToZero}
        renderIngredientsWithoutZero={getIngredienPerType(renderIngredientsWithoutZero)}
        renderIngredientsWithZero={getIngredienPerType(renderIngredientsWithZero)}
    />

}

export default ShoppingListIngredientList

