import { Item } from "./Item";
import {withId} from "../service/listService.ts";

export type Id = {
    id : number | string | undefined
}
export interface IngredientFromShoppingList extends withId {
    id: number | string | undefined,
    item: Item,
    quantity: number,
    quantitiesPerRecipes? : [{
        quantity : number,
        recipeId : number
    }],
    recipeId? : number[],
    manualShoppingList : boolean
}
