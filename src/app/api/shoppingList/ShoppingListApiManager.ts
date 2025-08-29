import { IngredientFromShoppingListMapperService } from "./IngredientFromShoppingListMapper";
import { RestIngredient } from "../model/RestIngredient";
import { RestIngredientFromMenu } from "../model/RestIngredientFromMenu";
import { ShoppingListApiCLient } from "./ShoppingListApiClient";
import { ItemApiManager } from "../item/ItemApiManager";
import { IngredientFromShoppingList } from "../../models/IngredientFromShoppingList";
import { Item } from "../../models/Item";

export class ShoppingListApiManager {
    client = new ShoppingListApiCLient()
    itemApi = new ItemApiManager()
    mapper = new IngredientFromShoppingListMapperService();

    remove(ingredient: IngredientFromShoppingList): Promise<any> {
        if (!ingredient.manualShoppingList)
            return this.client.removeIngredientFromMenu(ingredient.id);
        else
            return this.client.removeIngredientFromShoppingList(ingredient.id);
    }

    edit(ingredient: IngredientFromShoppingList): Promise<IngredientFromShoppingList> {
        if (!ingredient.manualShoppingList)
            return this.client.updateIngredientFromMenu(this.mapper.toRestIngredientFromMenu(ingredient))
                .then((ingredient: RestIngredientFromMenu) =>
                    this.itemApi.retrieveItems()
                        .then((items: Item[]) =>
                            this.mapper.toIngredientFromShoppingList_fromMenu(ingredient, items.filter(it => it.id === ingredient.itemId)[0])))
        else
            return this.client.updateIngredientFromShoppingList(this.mapper.toRestIngredient(ingredient))
                .then((ingredient: RestIngredient) =>
                    this.itemApi.retrieveItems()
                        .then((items: Item[]) =>
                            this.mapper.toIngredientFromShoppingList_fromIngredient(ingredient, items.filter(it => it.id === ingredient.itemId)[0])))

    }

    add(ingredient: IngredientFromShoppingList): Promise<IngredientFromShoppingList> {
        // manage case where items id is not define ==> should be created 
        if (!ingredient.item.id) {
            return this.itemApi.updateItem(ingredient.item).then((item: Item) => {
                const ingredientWithCreatedItem = {
                    ...ingredient,
                    item
                }
                return this.updateIngredientFromShoppingList(ingredientWithCreatedItem)
            })
        }else{
            return this.updateIngredientFromShoppingList(ingredient)
        }
    }

    updateIngredientFromShoppingList(ingredient: IngredientFromShoppingList): Promise<IngredientFromShoppingList> {
        return this.client.updateIngredientFromShoppingList(this.mapper.toRestIngredient(ingredient))
            .then((ingredient: RestIngredient) =>
                this.itemApi.retrieveItems()
                    .then((items: Item[]) =>
                        this.mapper.toIngredientFromShoppingList_fromIngredient(ingredient, items.filter(it => it.id === ingredient.itemId)[0])))
    }

    retrieveIngredientFromShoppingList(): Promise<IngredientFromShoppingList[]> {
        return this.client.retrieveIngredientFromMenu()
            .then((restIngredientFromMenu: RestIngredientFromMenu[]) => {
                return this.client.retrieveIngredientFromShoppingList()
                    .then((restIngredientFromShoppingList: RestIngredient[]) => {
                        return this.itemApi.retrieveItems()
                            .then((items: Item[]) => {
                                const menuIngredients = restIngredientFromMenu.map(ingredient => this.mapper.toIngredientFromShoppingList_fromMenu(ingredient, items.find(it => it.id === ingredient.itemId)!));
                                const shoppingListIngredients = restIngredientFromShoppingList.map(ingredient => this.mapper.toIngredientFromShoppingList_fromIngredient(ingredient, items.find(it => it.id === ingredient.itemId)!));
                                return menuIngredients.concat(shoppingListIngredients);
                            });
                    }
                    );
            });
    }
}
