import React from 'react';
import MenuView from './views/MenuView'
import ChainActionBuilder from '../util/behavioralComponent/ChainActionBuilder';
import { useState, useEffect } from 'react';
import EditRecipe from '../editRecipe/EditRecipe';

const MenuController = (props) => {

    const client = props.client

    const [menuRecipes, setMenuRecipes] = useState([])
    const [items, setItems] = useState([])

    useEffect(() => {
        client.retrieveMenu()
            .then((data) => {
                setMenuRecipes(data);
            });
    }, []);
    useEffect(() => {
        client.retrieveItems()
            .then((data) => {
                setItems(data);
            });
    }, []);



    async function removeRecipe(id) {
        console.log("Removing recipe from menu")
        console.log("id = " + id);
        client.removeRecipeFromMenu([id]).then(async () => {
            const test = await client.retrieveMenu()
            console.log(test);
            setMenuRecipes(test);
        })
    }

    const forceSync = (id) => {
        client.hardForceSync(id)
    }

   function recipeCreatedCallback(recipe) {
        if (recipe != undefined) {
            if (recipe.id != undefined) {
                client.updateRecipeAndForceSync(recipe, recipe.id)
            } else {
                client.updateRecipe(recipe)
            }
        }
    }

    return <ChainActionBuilder
        inputs={menuRecipes}
        onSubmit={recipeCreatedCallback}
        firstComponent={MenuView}
        secondcomponents={{ "editRecipe": () => EditRecipe }}
        propsToPassToFirstComponent={{ remove: removeRecipe, forceSync: forceSync }}
        propsToPassToSecondComponent={{ items: items, client: client }}
    />
}

export default MenuController


