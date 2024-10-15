import { useState } from "react";
import EditRecipeFormView from "./views/EditRecipeFormView";

const EditRecipeForm = (props) => {

    const recipeCreatedCallBack = props.elementEditedCallback
    const items = props.items
    const addToMenu = props.addToMenu
    const recipe = props.recipe
    const fullRecipe = props.fullRecipe
    let dataInitialState
    let ingredientsOfRecipe
    if (recipe != undefined && fullRecipe != undefined) {
        ingredientsOfRecipe = fullRecipe.ingredients
        dataInitialState = {
            id: recipe.id,
            name: recipe.name,
            source: recipe.source,
            type: recipe.type,
            ingredients: fullRecipe.ingredients
        }
    } else {
        ingredientsOfRecipe = []
        dataInitialState = {
            name: "",
            source: "",
            type: "",
            ingredients: []
        }
    }
    const [ingredients, setIngredients] = useState(ingredientsOfRecipe)
    const [formData, setFormData] = useState(dataInitialState)

    const handleInputChange = (input) => {
        const { name, value } = input;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const updateCallback = (formaDatas) => {
        if (formaDatas != undefined) {
            if (formaDatas.typeOfAction == "add") {
                let data = { ...formaDatas.data }
                data.ingredients = ingredients
                recipeCreatedCallBack({typeOfAction: "add", data: data})
            } else {
                let data = { ...formaDatas }
                data.ingredients = ingredients
                recipeCreatedCallBack(data)
            }
        }
        recipeCreatedCallBack()
    }

    const addIngredient = (ingredient) => {
        let ingredient2 = [...ingredients]
        ingredient2.push(ingredient)
        setIngredients(ingredient2)
    }

    const remove = (ingredient) => {
        let ingredient2 = [...ingredients]
        let index = ingredient2.indexOf(ingredient)
        ingredient2.splice(index, 1)
        setIngredients([...ingredient2])
    }

    const edit = (ingredient) => {
        let ingredient2 = [...ingredients]
        let index
        for (let i = 0; i < ingredient2.length; i++) {
            if (ingredient2[i].itemId == ingredient.itemId) {
                index = i
            }
        }
        ingredient2.splice(index, 1)
        ingredient2 = [
            ...ingredient2.slice(0, index),
            ingredient,
            ...ingredient2.slice(index)
        ]
        setIngredients(ingredient2)
    }


    return <EditRecipeFormView
        updateCallback={updateCallback}
        addIngredient={addIngredient}
        items={items}
        formData={formData}
        ingredients={ingredients}
        edit={edit}
        remove={remove}
        handleInputChange={handleInputChange}
    />
}
export default EditRecipeForm