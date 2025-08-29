import IngredientFromShoppingListView from "../../views/shoppingList/IngredientFromShoppingListView"
import { Ingredient } from "./Ingredient"

export const IngredientFromShoppingListComponent = ({ ingredient, command }: any) => {
    return <Ingredient
        ingredient={ingredient}
        command={command}
        ingredientView={({ trigger }: { trigger: () => void }) =>
            () => <IngredientFromShoppingListView ingredient={ingredient} remove={command.remove} buye={command.buye} callback={trigger} />}
    />

}
