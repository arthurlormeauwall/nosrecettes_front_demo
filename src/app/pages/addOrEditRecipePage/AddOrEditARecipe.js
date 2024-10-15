import React from 'react';

import Pages from '../../util/utilComponent/Pages'
import addOrEditRecipePages from './AddOrEditRecipePages';

const AddOrEditARecipe = (props) => {
    const client=props.client

    return (<div id='AddIngredientToShoppingListViewDiv'>
        <Pages pages={addOrEditRecipePages(client)} />
    </div>
    )
}

export default AddOrEditARecipe