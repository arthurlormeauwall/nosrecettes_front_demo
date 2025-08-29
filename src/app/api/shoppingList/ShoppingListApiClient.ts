import { ClientUtil } from "../client/ClientUtil"
import { RestIngredient } from "../model/RestIngredient"
import { RestIngredientFromMenu } from "../model/RestIngredientFromMenu"

export class ShoppingListApiCLient {

    clientUtil = ClientUtil

    removeIngredientFromMenu(idsOfIngredientToRemove: any): Promise<Response> {
        return this.clientUtil.postToApiWithNoBody('/shoppinglist/frommenu/delete' + this.clientUtil.getRequestParam(idsOfIngredientToRemove))
    }
    removeIngredientFromShoppingList(idsOfIngredientToRemove: any) : Promise<Response> {
        return this.clientUtil.postToApiWithNoBody('/shoppinglist/delete' + this.clientUtil.getRequestParam(idsOfIngredientToRemove))
    }
    updateIngredientFromShoppingList(ingredient: RestIngredient) : Promise<RestIngredient> {
        return this.clientUtil.postToApi('/shoppinglist', ingredient).then(response => {
            const contentType = response.headers.get('content-type');
            if (contentType && contentType.includes('application/json')) {
                return response.json();
            } else {
                // Si pas de JSON, retourner l'ingredient original
                return ingredient;
            }
        })
    }

    updateIngredientFromMenu(ingredient: RestIngredientFromMenu): Promise<RestIngredientFromMenu> {
        return this.clientUtil.postToApi('/shoppinglist/frommenu', ingredient).then(response => {
            const contentType = response.headers.get('content-type');
            if (contentType && contentType.includes('application/json')) {
                return response.json();
            } else {
                // Si pas de JSON, retourner l'ingredient original
                return ingredient;
            }
        })
    }

    retrieveIngredientFromMenu() : Promise<RestIngredientFromMenu[]> {
        return this.clientUtil.getFromApi('/shoppinglist/frommenu').then(response=>response.json())
    }

    retrieveIngredientFromShoppingList() : Promise<RestIngredient[]> {
        return this.clientUtil.getFromApi('/shoppinglist').then(response=>response.json())
    }
}