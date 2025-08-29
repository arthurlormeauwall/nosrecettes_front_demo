import { IngredientType } from "./IngredientType";

export interface Recipe {
    id?: number,
    name: string,
    source: string,
    season: string,
    type: string,
    ingredients: IngredientType[]
}