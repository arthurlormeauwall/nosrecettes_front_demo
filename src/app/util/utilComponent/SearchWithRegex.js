import React from 'react';
import SearchWithRegexView from './views/SearchWithRegexView';

const SearchWithRegex = (props) => {
    const elementsToSearchIn = props.elementsToSearchIn;
    const onSubmit = props.onSubmit
    const getInput = props.getInput
    const getMatchingElements = props.getMatchingElements
    const autoFocus = props.autoFocus

    function allElementThatMatchInput(input) {
        var reg = new RegExp(input.split('').join('\\w*').replace(/\W/, ""), 'i');
        const elementWithoutUndefined = elementsToSearchIn.filter(element => { if (element.name) return element })
        if (input == '') {
            return elementWithoutUndefined
        }
        return elementWithoutUndefined.filter((element) => {
            if (element.name.match(reg)) {
                return element;
            }
        });
    }

    function onChangeF(val) {
        getMatchingElements(allElementThatMatchInput(val))
        if (getInput != undefined) {
            getInput({ name: val })
        }
    }

    return <SearchWithRegexView
        autoFocus={autoFocus}
        onChange={onChangeF}
        onSubmit={onSubmit} />

}

export default SearchWithRegex