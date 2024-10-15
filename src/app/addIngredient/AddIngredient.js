import React from 'react';

import CreateIngredient from './CreateIngredient';
import ChainActionBuilder from '../util/behavioralComponent/ChainActionBuilder';
import AddIngredientButton from './views/AddIngredientButton';

const AddIngredient = (props) => {

    const getBackCreatedIngredient = props.getBackCreatedIngredient
    const propsToPass = { items: props.items }

    return <ChainActionBuilder
            firstComponent={AddIngredientButton}
            secondcomponents={{"addIngredient":()=>CreateIngredient}}
            propsToPassToSecondComponent={propsToPass}
            onSubmit={getBackCreatedIngredient}
        />
}

export default AddIngredient