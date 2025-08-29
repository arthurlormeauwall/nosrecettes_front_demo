import { MenuApiClient } from "./MenuApiClient";
import { MenuMapperService } from "./MenuMapper";
import { MenuRecipe } from "../../models/MenuRecipe";

export class MenuApiManager {
    client = new MenuApiClient();
    mapper = new MenuMapperService();

    retrieveMenu(): Promise<MenuRecipe[]> {
        return this.client.retrieveMenu()
            .then(restMenuRecipes => 
                restMenuRecipes.map(restMenuRecipe => this.mapper.toMenuRecipe(restMenuRecipe))
            );
    }

    removeRecipeFromMenu(recipeIds: number[]): Promise<any> {
        return this.client.removeRecipeFromMenu(recipeIds);
    }

    hardForceSync(recipeId: number): Promise<any> {
        return this.client.hardForceSync(recipeId);
    }

    forceSync(ingredientIds: number[]): Promise<any> {
        return this.client.forceSync(ingredientIds);
    }
}