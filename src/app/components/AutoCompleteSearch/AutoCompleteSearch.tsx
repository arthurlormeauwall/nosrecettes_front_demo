import { useState } from 'react';
import AutoCompleteSearchView from '../../views/AutoComplete/AutoCompleteView';
import {ElementWithName} from "./SearchWithRegex.tsx";

type AutocompleteProps = {
    elements: ElementWithName[],
    onSelectionCallback: (input: ElementWithName)=>void,
    autoFocus: boolean
    cancel? : ()=>void
    notFound?: (b:boolean)=> void
    onChange?: (name: string) => void
    value?: string
}

const AutoCompleteSearch = ({
    onSelectionCallback,
    elements,
     autoFocus,
    cancel,
    notFound,
    onChange,
    value
}: AutocompleteProps) => {

    const [elementSelected, selectElement] = useState(elements)

    function setMatchingElements(element: ElementWithName[]) {
        selectElement(element)
        if (element.length === 0 && notFound) {
            notFound(true)
        }else if (notFound && element.length > 0) {
            notFound(false)
        }
    }

    return <AutoCompleteSearchView 
        selectedElements={elementSelected}
        onChange={onChange}
        elementsToSearchIn={elements}
        onSelectionCallback={onSelectionCallback}
        setMatchingElements={setMatchingElements}
        autoFocus={autoFocus}
        cancel={cancel}
        value={value}
    />
}

export default AutoCompleteSearch
