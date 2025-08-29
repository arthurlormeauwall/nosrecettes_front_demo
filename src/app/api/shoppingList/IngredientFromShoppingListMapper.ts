
import { IngredientFromShoppingList } from '../../models/IngredientFromShoppingList';
import { IngredientType } from '../../models/IngredientType';
import { ItemMapperService } from '../item/ItemMapper';
import { RestIngredient } from '../model/RestIngredient';
import { RestIngredientFromMenu } from '../model/RestIngredientFromMenu';
import { RestItem } from '../model/RestItem';


export class IngredientFromShoppingListMapperService {
  constructor() { }


  toIngredient(ing: IngredientFromShoppingList): IngredientType {
    return {
      item: ing.item,
      quantity: ing.quantity,
      id: ing.id
    }
  }

  sumArray(array: number[]) {
    return array.reduce((p: number, n: number) => p + n, 0)
  }

  toIngredientFromShoppingList_fromMenu(restIngredient: RestIngredientFromMenu, restItem: RestItem): IngredientFromShoppingList {
    const item = new ItemMapperService().toItem(restItem)

    return {
      id : restIngredient.id,
      quantity: restIngredient.quantity,
      recipeId: restIngredient.recipeId,
      quantitiesPerRecipes: restIngredient.quantities,
      manualShoppingList: false,
      item: item
    }
  }

  toIngredientFromShoppingList_fromIngredient(restIngredient: RestIngredient, restItem: RestItem): IngredientFromShoppingList {
    const item = new ItemMapperService().toItem(restItem)
    return {
      quantity: restIngredient.quantity,
      id: restIngredient.id,
      manualShoppingList: true,
      item: item,
    }
  }

  toRestIngredientFromMenu(ingredient: IngredientFromShoppingList): RestIngredientFromMenu {
    return {
      itemId: ingredient.item.id,
      quantities : ingredient.quantitiesPerRecipes,
      ...ingredient
    }
  }

  toRestIngredient(ingredient: IngredientFromShoppingList): RestIngredient {
    return {
      itemId: ingredient.item.id,
      quantity : ingredient.quantity,
      id: ingredient.id
    }
  }

  fromIngredient(ingredient: IngredientType): IngredientFromShoppingList {
    return {
      manualShoppingList: false,
      item: ingredient.item,
      quantity: ingredient.quantity,
      id: ingredient.id,
    }
  }
}
