import React, { useState, useEffect } from 'react';
import EditExistingItemForm from './EditExistingItemForm'
import ChainActionBuilder from '../util/behavioralComponent/ChainActionBuilder';
import SearchItemView from '../searchItem/SearchItemView';

const SearchAndEditItem = (props) => {
    const client = props.client

    const [items, setItems] = useState([])

    useEffect(() => {
        client.retrieveItems()
            .then((data) => {
                setItems(data);
            });
    }, []);


    function itemCreatedCallback(item) {
        console.log("item with name :" + item.name + " edited")
        client.updateItem(item)
    }

    return <ChainActionBuilder
        inputs={items}
        onSubmit={itemCreatedCallback}
        firstComponent={SearchItemView}
        secondcomponents={{"editIngredient":()=>EditExistingItemForm}}
        propsToPassToSecondComponent={{ items: items }}
    />
}

export default SearchAndEditItem