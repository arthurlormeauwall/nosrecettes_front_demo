import React, { useState } from 'react';
import Autocomplete from "../util/utilComponent/Autocomplete"

const SearchRecipeView = (props) => {
    const callback = props.callback
    const recipes=props.elements

    const onSelection=(recipe)=>{
        callback(recipe,"editRecipe")
    }
    return <Autocomplete
        autoFocus={true}
        elements={recipes}
        onSelectionCallback={onSelection}
        />
}

export default SearchRecipeView