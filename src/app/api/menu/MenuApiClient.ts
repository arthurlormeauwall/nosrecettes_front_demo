import { ClientUtil } from "../client/ClientUtil";
import { RestMenuRecipe } from "../model/RestMenuRecipe";

export class MenuApiClient {
    clientUtil = ClientUtil;

    retrieveMenu(): Promise<RestMenuRecipe[]> {
        return this.clientUtil.getFromApi('/menu').then(response => response.json());
    }

    removeRecipeFromMenu(recipeIds: number[]): Promise<Response> {
        return this.clientUtil.postToApiWithNoBody('/menu/remove' + this.clientUtil.getRequestParam(recipeIds));
    }

    hardForceSync(recipeId: number): Promise<Response> {
        return this.clientUtil.postToApiWithNoBody('/menu/hardforcesync' + this.clientUtil.getRequestParam(recipeId));
    }

    forceSync(ingredientIds: number[]): Promise<Response> {
        return this.clientUtil.postToApiWithNoBody('/menu/forcesync' + this.clientUtil.getRequestParam(ingredientIds));
    }
}