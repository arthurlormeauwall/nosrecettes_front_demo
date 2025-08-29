import { IngredientFromShoppingList } from "../../models/IngredientFromShoppingList"
import { ShoppingListIngredientInfo, ActionButton, EditButton, RemoveButton } from "../UI_Kit";

type IngredientViewProps = {
    ingredient: IngredientFromShoppingList,
    remove: (ing: IngredientFromShoppingList[]) => void,
    buye: (ing: IngredientFromShoppingList) => void,
    callback: () => void
}

const IngredientFromShoppingListView = ({ ingredient, remove, buye, callback }: IngredientViewProps) => {
    const onClick = () => {
        callback()
    }

    const handleBuye = (ing: IngredientFromShoppingList) => {
        buye(ing)
    }

    return (
        <>
            <div className="shopping-list__ingredient">
                <ShoppingListIngredientInfo 
                    name={ingredient.item.name} 
                    quantityType={ingredient.item.quantityType} 
                    quantity={ingredient.quantity}
                />
            </div>
            <div className="shopping-list__actions">
                <ActionButton onClick={() => handleBuye(ingredient)} variant="buy">buy</ActionButton>
                <EditButton onClick={() => onClick()}>edit</EditButton>
                <RemoveButton onClick={() => remove([ingredient])}>remove</RemoveButton>
            </div>     
        </>
    )
}

export default IngredientFromShoppingListView