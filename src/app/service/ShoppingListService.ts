import { IngredientFromShoppingListMapperService } from "../api/shoppingList/IngredientFromShoppingListMapper";
import { ShoppingListApiManager } from "../api/shoppingList/ShoppingListApiManager";
import { IngredientFromShoppingList } from "../models/IngredientFromShoppingList";
import { IngredientType } from "../models/IngredientType";


export type IngredientFromShoppingListPerType = {
    [key: string]:IngredientFromShoppingList[]
}
export type IngredientForShoppingList = {
    inCart: IngredientFromShoppingListPerType,
    alreadyBought: IngredientFromShoppingListPerType
}
export interface IShoppingListService {
    getIngredientFormatedForShoppingList(ingredients: IngredientFromShoppingList[]): IngredientForShoppingList;
    fromIngredient(ingredient: IngredientType): IngredientFromShoppingList;
    toIngredient(ing: IngredientFromShoppingList): any;
    retrieveIngredientFromShoppingList: () => Promise<IngredientFromShoppingList[]>;
    remove: (ingredient: IngredientFromShoppingList) => Promise<any>;
    edit: (ingredient: IngredientFromShoppingList) => Promise<IngredientFromShoppingList>;
    add: (ingredient: IngredientFromShoppingList) => Promise<IngredientFromShoppingList>;
}

export class ShoppingListService implements IShoppingListService {
    apiManager = new ShoppingListApiManager();
    mapper = new IngredientFromShoppingListMapperService();

    remove(ingredient: IngredientFromShoppingList): Promise<any> {
        return this.apiManager.remove(ingredient);
    }

    edit(ingredient: IngredientFromShoppingList): Promise<IngredientFromShoppingList> {
        return this.apiManager.edit(ingredient);
    }

    add(ingredient: IngredientFromShoppingList): Promise<IngredientFromShoppingList> {
        return this.apiManager.add(ingredient);
    }

    retrieveIngredientFromShoppingList(): Promise<IngredientFromShoppingList[]> {
        return this.apiManager.retrieveIngredientFromShoppingList();
    }

    toIngredient(ing: IngredientFromShoppingList) {
        return this.mapper.toIngredient(ing);
    }

    fromIngredient(ingredient: IngredientType): IngredientFromShoppingList {
        return this.mapper.fromIngredient(ingredient);
    }

    getIngredientFormatedForShoppingList(ingredients: IngredientFromShoppingList[]): IngredientForShoppingList {
        const getIngredienPerType = (ingredients: IngredientFromShoppingList[]): IngredientFromShoppingListPerType => {
            let ingredientPerType: IngredientFromShoppingListPerType = {};
            return (() => {
                ingredients.forEach((ingredient: IngredientFromShoppingList) => {
                    let type = ingredient.item.type;
                    if (ingredientPerType[type]) {
                        ingredientPerType[type] = [...ingredientPerType[type], ingredient];
                    } else {
                        ingredientPerType[type] = [ingredient];
                    }
                });
                return ingredientPerType;
            })()
        }

        const ingredientsWithoutZero: IngredientFromShoppingList[] =
            ingredients.filter((component: IngredientFromShoppingList) => !(component.quantity === 0))
        const ingredientsWithZero: IngredientFromShoppingList[] =
            ingredients.filter((component: IngredientFromShoppingList) => component.quantity === 0)

        return {
            inCart: getIngredienPerType(ingredientsWithoutZero),
            alreadyBought: getIngredienPerType(ingredientsWithZero)
        }
    }

    sortTypes(types: any) : any[] {
        const sort = (types: any) => {
            return types.sort((a: any, b: any) => {
                const nameA: any = a.toUpperCase();
                const nameB: any = b.toUpperCase();
                if (nameA < nameB) {
                    return -1;
                }
                if (nameA > nameB) {
                    return 1;
                }
                return 0;
            })
        }
        return sort(types)
    }
}
