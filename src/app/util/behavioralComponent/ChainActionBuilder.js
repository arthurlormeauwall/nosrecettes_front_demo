import React, { useState } from 'react';
import ChainActionBuilderView from './ChainActionBuilderView';

const ChainActionBuilder = (props) => {
    const inputElements = props.inputs
    const submitCallback = props.onSubmit
    const FirstComponent = props.firstComponent
    const secondcomponents = props.secondcomponents
    const propsToPassToFirstComponent = props.propsToPassToFirstComponent
    const propsToPassToSecondComponent = props.propsToPassToSecondComponent


    const [elementsToPass, selectElementsToPass] = useState([])
    const [shouldDisplayFirstComponent, displayFirstComponent] = useState(true)
    const [SecondComponent, setSecondComponent] = useState()


    const elementSelectedCallback = (elementsToPass, content) => {
        displayFirstComponent(false)
        selectElementsToPass(elementsToPass)
        setSecondComponent(secondcomponents[content])
    }

    const elementEditedCallback = (elementsToPass) => {
        displayFirstComponent(true)
        submitCallback(elementsToPass)
    }

    return <ChainActionBuilderView
        inputs={inputElements}
        FirstComponent={FirstComponent}
        SecondComponent={SecondComponent}
        propsToPassToFirstComponent={propsToPassToFirstComponent}
        propsToPassToSecondComponent={propsToPassToSecondComponent}
        elementsToPass={elementsToPass}
        shouldDisplayFirstComponent={shouldDisplayFirstComponent}
        elementSelectedCallback={elementSelectedCallback}
        elementEditedCallback={elementEditedCallback}
    />
}

export default ChainActionBuilder