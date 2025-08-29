import { RecipeApiClient } from "./RecipeApiClient";
import { RecipeMapperService } from "./RecipeMapper";
import { ItemApiManager } from "../item/ItemApiManager";
import { Recipe } from "../../models/Recipe";
import { Item } from "../../models/Item";

export class RecipeApiManager {
    client = new RecipeApiClient();
    itemApi = new ItemApiManager();
    mapper = new RecipeMapperService();

    retrieveRecipes(): Promise<Recipe[]> {
        return this.client.retrieveRecipes()
            .then(restRecipeSummaries => 
                restRecipeSummaries.map(summary => this.mapper.toRecipeFromSummary(summary))
            );
    }

    retrieveRecipe(id: number): Promise<Recipe> {
        return this.client.retrieveRecipe(id)
            .then(restRecipe => 
                this.itemApi.retrieveItems()
                    .then((items: Item[]) => 
                        this.mapper.toRecipe(restRecipe, items)
                    )
            );
    }

    updateRecipe(recipe: Recipe): Promise<Recipe> {
        return this.client.updateRecipe(this.mapper.toRestRecipe(recipe))
            .then(restRecipe => 
                this.itemApi.retrieveItems()
                    .then((items: Item[]) => 
                        this.mapper.toRecipe(restRecipe, items)
                    )
            );
    }

    addRecipeToMenu(recipeIds: number[]): Promise<any> {
        return this.client.addRecipeToMenu(recipeIds);
    }

    removeRecipeFromMenu(recipeIds: number[]): Promise<any> {
        return this.client.removeRecipeFromMenu(recipeIds);
    }
}