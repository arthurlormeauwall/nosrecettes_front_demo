import { Recipe } from "../../models/Recipe";
import { RestRecipe } from "../model/RestRecipe";
import { RestRecipeSummary } from "../model/RestRecipeSummary";
import { IngredientType } from "../../models/IngredientType";
import { RestIngredient } from "../model/RestIngredient";
import { Item } from "../../models/Item";

export class RecipeMapperService {
    toRecipe(restRecipe: RestRecipe, items: Item[]): Recipe {
        return {
            id: restRecipe.id,
            name: restRecipe.name,
            source: restRecipe.source,
            season: restRecipe.season,
            type: restRecipe.type,
            ingredients: restRecipe.ingredients.map(restIngredient => this.toIngredientType(restIngredient, items))
        };
    }

    toRecipeFromSummary(restRecipeSummary: RestRecipeSummary): Recipe {
        return {
            id: restRecipeSummary.id,
            name: restRecipeSummary.name,
            source: restRecipeSummary.source,
            season: restRecipeSummary.season,
            type: restRecipeSummary.type,
            ingredients: []
        };
    }

    toRestRecipe(recipe: Recipe): RestRecipe {
        return {
            id: recipe.id,
            name: recipe.name,
            source: recipe.source,
            season: recipe.season,
            type: recipe.type,
            ingredients: recipe.ingredients.map(ingredient => this.toRestIngredient(ingredient))
        };
    }

    private toIngredientType(restIngredient: RestIngredient, items: Item[]): IngredientType {
        const item = items.find(it => it.id === restIngredient.itemId);
        return {
            id: restIngredient.id,
            quantity: restIngredient.quantity,
            item: item!
        };
    }

    private toRestIngredient(ingredient: IngredientType): RestIngredient {
        return {
            id: ingredient.id,
            quantity: ingredient.quantity,
            itemId: ingredient.item.id!
        };
    }
}