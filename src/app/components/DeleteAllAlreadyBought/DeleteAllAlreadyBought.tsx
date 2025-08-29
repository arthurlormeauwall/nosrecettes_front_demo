import { IngredientFromShoppingList } from "../../models/IngredientFromShoppingList"
import { RemoveButton } from "../../views/UI_Kit"
import {IngredientFromShoppingListPerType} from "../../service/ShoppingListService.ts";


type DeleteAllAlreadyBoughtProps = {
    remove: (ing: IngredientFromShoppingList[]) => void
    ingredients: IngredientFromShoppingListPerType
}

export const DeleteAllAlreadyBought = ({ remove, ingredients }: DeleteAllAlreadyBoughtProps) => {

    const handleClick = () => {
        let temp : IngredientFromShoppingList[] = []
        for (const type in ingredients){
            temp= temp.concat(ingredients[type])
        }

        remove(temp)
    }


    return (
        <div className="shopping-list__remove-all">
            <RemoveButton onClick={handleClick}>Remove all bought ingredients</RemoveButton>
        </div>
    )
}
