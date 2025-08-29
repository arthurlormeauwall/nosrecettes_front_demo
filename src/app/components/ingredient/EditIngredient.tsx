import { useState } from "react"
import EditIngredientView from "../../views/Ingredient/EditIngredientView"
import { IngredientType } from "../../models/IngredientType"


type EditIngredientProps = {
    quantityEditedCallback: (ing: any) => void,
    ingredient: IngredientType,
    cancel : ()=>void
}

export const EditIngredient = ({ quantityEditedCallback, ingredient, cancel }: EditIngredientProps) => {

    const [quantity, setQuantity] = useState(ingredient.quantity || 1)

    const submitQuantity = (quantity: number) => {
        quantityEditedCallback({
            ...ingredient,
            quantity: quantity
        })
    }

    return <EditIngredientView
        ingredient={ingredient}
        setQuantity={setQuantity}
        submitQuantity={submitQuantity}
        quantity={quantity}
        cancel={cancel}
    />
}

export default EditIngredient