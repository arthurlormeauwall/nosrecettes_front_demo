import { Item } from "./Item"
import {withId} from "../service/listService.ts";

export interface IngredientType extends withId{
    id: number| string|undefined,
    fromMenu? : boolean
    quantity : number,
    item: Item
}
