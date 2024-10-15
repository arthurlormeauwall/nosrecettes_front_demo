import React from 'react';
import SearchWithRegex from "../SearchWithRegex"

const AutocompleteView = (props) => {
    const onSelectionCallback = props.onSelectionCallback
    const elementsToSearchIn = props.elementsToSearchIn;
    const onSubmitCallback = props.onSubmitCallback
    const onChangeCallback = props.onChangeCallback
    const autoFocus = props.autoFocus
    const elementSelected = props.elementSelected
    const setMatchingElements = props.setMatchingElements



    return (<div id='SearchItemDiv'>
        <SearchWithRegex
            autoFocus={autoFocus}
            elementsToSearchIn={elementsToSearchIn}
            getInput={onChangeCallback}
            onSubmit={onSubmitCallback}
            getMatchingElements={setMatchingElements} />
        <dt>
            {elementSelected.map(item => (<dd><button onClick={() => onSelectionCallback(item)}> {item.name} </button></dd>))}
        </dt>
    </div>
    )
}

export default AutocompleteView