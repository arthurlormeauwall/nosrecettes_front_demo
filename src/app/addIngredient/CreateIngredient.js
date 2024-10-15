import React from 'react';
import SearchItemView from '../searchItem/SearchItemView'
import EditIngredientAdapter from './EditIngredientAdapter'
import ChainActionBuilder from '../util/behavioralComponent/ChainActionBuilder'

const CreateIngredient = (props) => {
    const items = props.propsToPass.items;
    const submitCallback = props.callback

    return <ChainActionBuilder
            inputs={items}
            onSubmit={submitCallback}
            firstComponent={SearchItemView}
            secondcomponents={{"editIngredient":()=>EditIngredientAdapter}}
        />
}

export default CreateIngredient