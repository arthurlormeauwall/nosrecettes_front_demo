import React from 'react';
import Autocomplete from '../util/utilComponent/Autocomplete';


const SearchItem = (props) => {
    const callbackItem = props.callback
    const items=props.elements

    const onSelection=(e)=>{
        callbackItem(e, "editIngredient")
    }

    return (<div id='SearchItemDiv'>
        <Autocomplete
        autoFocus={true}
        elements={items}
        onSelectionCallback={onSelection}
        />
        </div>
    )
}

export default SearchItem