import React from 'react';

import IngredientListView from '../ingredientList/IngredientListView';
import ShoppingListIngredientList from './ShoppingListIngredientList';

const ShoppingList = (props) => {

    const edit = props.edit
    const remove = props.remove
    const items = props.items
    const client = props.client
    const fetchData = props.fetchData
    const setToZero = props.setToZero
    const ingredientCallBack = props.ingredientCallBack
    const ingredients=props.ingredients

    const getIngredientListComponent = () => {
        return <ShoppingListIngredientList
            ingredients={ingredients}
            edit={edit}
            remove={remove}
            items={items}
            client={client}
            updateData={fetchData}
            setToZero={setToZero}
        />
    }

    return <IngredientListView
        ingredientListComponent={getIngredientListComponent}
        items={items}
        addIngredientCallback={ingredientCallBack}
    />
}

export default ShoppingList