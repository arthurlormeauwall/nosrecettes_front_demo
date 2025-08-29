import { ClientUtil } from "../client/ClientUtil";
import { RestRecipe } from "../model/RestRecipe";
import { RestRecipeSummary } from "../model/RestRecipeSummary";

export class RecipeApiClient {
    clientUtil = ClientUtil;

    retrieveRecipes(): Promise<RestRecipeSummary[]> {
        return this.clientUtil.getFromApi('/recipe').then(response => response.json());
    }

    retrieveRecipe(id: number): Promise<RestRecipe> {
        return this.clientUtil.getFromApi(`/recipe/${id}`).then(response => response.json());
    }

    updateRecipe(recipe: RestRecipe): Promise<RestRecipe> {
        return this.clientUtil.postToApi('/recipe', recipe).then(response => response.json());
    }

    addRecipeToMenu(idsOfRecipeToAdd: number[]): Promise<Response> {
        return this.clientUtil.postToApiWithNoBody('/menu' + this.clientUtil.getRequestParam(idsOfRecipeToAdd));
    }

    removeRecipeFromMenu(idsOfRecipeToRemove: number[]): Promise<Response> {
        return this.clientUtil.postToApiWithNoBody('/menu/remove' + this.clientUtil.getRequestParam(idsOfRecipeToRemove));
    }
}