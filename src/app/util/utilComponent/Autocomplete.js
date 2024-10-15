import React, { useState } from 'react';
import AutocompleteView from './views/AutocompleteView';

const Autocomplete = (props) => {
    const onSelectionCallback = props.onSelectionCallback
    const elementsToSearchIn = props.elements;
    const onSubmitCallback = props.onSubmitCallback
    const onChangeCallback = props.onChangeCallback
    const autoFocus = props.autoFocus

    const [elementSelected, selectElement] = useState(props.elements)


    function setMatchingElements(element) {
        selectElement(element)
    }

    return <AutocompleteView
        onChangeCallback={onChangeCallback}
        onSubmitCallback={onSubmitCallback}
        onSelectionCallback={onSelectionCallback}
        elementsToSearchIn={elementsToSearchIn}
        autoFocus={autoFocus}
        elementSelected={elementSelected}
        setMatchingElements={setMatchingElements}
        />
}

export default Autocomplete