import React from 'react';
import AddIngredient from '../addIngredient/AddIngredient';

const IngredientListView = (props) => {

    const ListOfIngredientComponent = props.ingredientListComponent
    const addIngredientCallback=props.addIngredientCallback
    const items=props.items

    return (
        <div id='IngredientListDiv'>
            <AddIngredient getBackCreatedIngredient={addIngredientCallback} items={items} />
            <ListOfIngredientComponent />
        </div>
    )

}

export default IngredientListView
