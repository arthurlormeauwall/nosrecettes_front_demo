import React from 'react';

import IngredientPerItemView from './IngredientPerItemView';


const ShoppingListIngredientListView = (props) => {

    const items = props.items
    const remove = props.remove
    const edit = props.edit
    const setToZero = props.setToZero
    const renderIngredientsWithoutZero = props.renderIngredientsWithoutZero
    const renderIngredientsWithZero = props.renderIngredientsWithZero
   
    return (
        <div id='ListOfIngredietOfShoppingListDiv'>
            <dl>
                <IngredientPerItemView
                    items={items}
                    setToZero={setToZero}
                    remove={remove}
                    edit={edit}
                    ingredientPerType={renderIngredientsWithoutZero}
                />
            </dl>
            <br />
            Already bought
            <dl>
                <IngredientPerItemView
                    items={items}
                    setToZero={setToZero}
                    remove={remove}
                    edit={edit}
                    ingredientPerType={renderIngredientsWithZero}
                />
            </dl>
        </div>
    )

}

export default ShoppingListIngredientListView

