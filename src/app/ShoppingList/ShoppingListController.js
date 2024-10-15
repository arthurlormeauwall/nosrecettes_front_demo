import React from 'react';

import { useState, useEffect } from 'react';
import ShoppingList from './ShoppingList';

const ShoppingListController = (props) => {
    const client = props.client
    const [items, setItems] = useState([])
    const [ingredientsFromMenu, setIngredientsFromMenu] = useState([])
    const [ingredientsFromShoppingList, setIngredientsFromShoppingList] = useState([])

    function fetchData() {
        client.retrieveItems()
            .then((data) => {
                setItems(data);
                return client.retrieveIngredientFromMenu();
            })
            .then((data) => {
                setIngredientsFromMenu(data);
                return client.retrieveIngredientFromShoppingList();
            })
            .then((data) => {
                setIngredientsFromShoppingList(data);
            });
    }

    const remove = (ingredient) => {
        if (ingredient.fromMenu)
            client.removeIngredientFromMenu(ingredient.id)
        else
            client.removeIngredientFromShoppingList(ingredient.id)
        fetchData()

    }

    const edit = (ingredient) => {
        if (ingredient.fromMenu)
            client.updateIngredientFromMenu(ingredient)
        else
            client.updateIngredientFromShoppingList(ingredient)
        fetchData()
    }


    function getIngredient() {
        return ingredientsFromMenu.map(ing => {
            ing.fromMenu = true
            return ing
        }).concat(ingredientsFromShoppingList.map(ing => {
            ing.fromMenu = false
            return ing
        }))
    }

    useEffect(() => {
        fetchData();
    }, []);

    const setToZero = (ingredient) => {
        const newIngredient = { ...ingredient }
        newIngredient.quantity = 0
        if (ingredient.fromMenu)
            client.updateIngredientFromMenu(newIngredient)
        else
            client.updateIngredientFromShoppingList(newIngredient)

        fetchData()
    }


    function ingredientCallBack(ingredient) {
        client.updateIngredientFromShoppingList(ingredient)
        fetchData()
    }

    return <ShoppingList
        remove=             {remove}
        edit=               {edit}
        items=              {items}
        client=             {client}
        fetchData=          {fetchData}
        setToZero=          {setToZero}
        ingredientCallBack= {ingredientCallBack}
        ingredients =       {getIngredient()}
    />
}

export default ShoppingListController