export interface RestIngredientFromMenu {
    id :number | string |undefined,
    itemId?:number,
    quantities? : [{
        quantity : number,
        recipeId : number
    }];
    quantity : number,
    recipeId? : number[];
}
