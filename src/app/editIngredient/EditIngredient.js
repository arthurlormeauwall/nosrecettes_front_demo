import { useState } from "react"
import EditIngredientView from "./views/EditIngredientView"

const EditIngredient = (props) => {

    const item = props.item
    const ingredientCallBack = props.elementEditedCallback
    const ingredient = props.ingredient

    const [quantity, setQuantity] = useState("1")

    const sendIngredientWithQuantity =(quantity)=> {
        if (ingredient != undefined) {
            ingredientCallBack({
                ...ingredient,
                itemId: item.id,
                quantity: quantity
            })
        } else {
            ingredientCallBack({
                itemId: item.id,
                quantity: quantity
            })
        }
    }
    return <EditIngredientView
        item={item}
        setQuantity={setQuantity}
        sendIngredientWithQuantity={sendIngredientWithQuantity}
        quantity={quantity}
    />



}

export default EditIngredient