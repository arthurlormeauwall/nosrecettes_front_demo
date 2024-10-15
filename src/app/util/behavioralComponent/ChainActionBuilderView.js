import React, { useState } from 'react';


const ChainActionBuilderView = (props) => {
    const inputElements = props.inputs
    const FirstComponent = props.FirstComponent
    const propsToPassToFirstComponent=props.propsToPassToFirstComponent
    const propsToPassToSecondComponent=props.propsToPassToSecondComponent
    const elementsToPass = props.elementsToPass
    const shouldDisplayFirstComponent = props.shouldDisplayFirstComponent
    const SecondComponent = props.SecondComponent

    const elementSelectedCallback = props.elementSelectedCallback
    const elementEditedCallback = props.elementEditedCallback

    const conditionalRendering = () => {
        if (shouldDisplayFirstComponent)
            return <FirstComponent
                elements={inputElements}
                callback={elementSelectedCallback}
                propsToPass={propsToPassToFirstComponent}
                />
        else
            return <SecondComponent
                elements={elementsToPass}
                callback={elementEditedCallback}
                propsToPass={propsToPassToSecondComponent}
                />
    }

    return conditionalRendering()
}

export default ChainActionBuilderView