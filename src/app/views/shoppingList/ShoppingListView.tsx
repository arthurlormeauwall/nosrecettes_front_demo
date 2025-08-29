import AddIngredient from "../../components/AddIngredient/AddIngredient"
import { IngredientFromShoppingListComponent } from "../../components/ingredient/IngredientFromShoppingListComponent"
import { IngredientFromShoppingList } from "../../models/IngredientFromShoppingList"
import { IngredientType } from "../../models/IngredientType"
import { ShoppingListService } from "../../service/ShoppingListService"
import { DeleteAllAlreadyBought } from "../../components/DeleteAllAlreadyBought/DeleteAllAlreadyBought"

export type ShoppingListCommand = {
    buye: (ing: IngredientFromShoppingList) => void
    remove: (ing: IngredientFromShoppingList[]) => void
    edited: (ing: IngredientFromShoppingList) => void
}

export type ShoppingListIngredientListProps = {
    command: ShoppingListCommand,
    add: (ing: IngredientType) => void
    ingredients: IngredientFromShoppingList[],
}

export const ShoppingListView = ({ add, command, ingredients }: ShoppingListIngredientListProps) => {
    const service = new ShoppingListService()
    const ingredientsPerType = service.getIngredientFormatedForShoppingList(ingredients)

    return (
        <div className="shopping-list">
            <AddIngredient onAddIngredient={add} />
            
            <div className="shopping-list__section">
                <div className="shopping-list__type-sections">
                    <IngredientPerType ingredientsByType={ingredientsPerType.inCart} command={command} />
                </div>
            </div>
            
            <div className="shopping-list__section shopping-list__already-bought">
                <div className="shopping-list__header-with-action">
                    <div className="shopping-list__header">Already bought</div>
                    <DeleteAllAlreadyBought remove={command.remove} ingredients={ingredientsPerType.alreadyBought}/>
                </div>
                <div className="shopping-list__type-sections">
                    <IngredientPerType ingredientsByType={ingredientsPerType.alreadyBought} command={command} />
                </div>
            </div>
        </div>
    )
}

const IngredientPerType = ({ ingredientsByType, command }: { ingredientsByType: Record<string, IngredientFromShoppingList[]>, command: any }) => {
    const service = new ShoppingListService()
    const sortedTypes = service.sortTypes(Object.keys(ingredientsByType))
    
    return (
        <>
            {sortedTypes.map((type, index) => (
                <div key={index} className="shopping-list__type-group">
                    <div className="shopping-list__type-title">{type}</div>
                    <ul className="shopping-list__items">
                        {ingredientsByType[type].map((ing: IngredientFromShoppingList) => (
                            <li key={ing.id!} className="shopping-list__item">
                                <IngredientFromShoppingListComponent ingredient={ing} command={command} />
                            </li>
                        ))}
                    </ul>
                </div>
            ))}
        </>
    )
}