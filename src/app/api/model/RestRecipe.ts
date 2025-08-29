import { RestIngredient } from "./RestIngredient";

export interface RestRecipe {
    id?: number,
    name: string,
    source: string,
    season: string,
    type: string,
    ingredients: RestIngredient[]
}