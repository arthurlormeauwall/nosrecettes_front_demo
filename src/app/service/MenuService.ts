import { MenuRecipe } from "../models/MenuRecipe";
import { MenuApiManager } from "../api/menu/MenuApiManager";

export interface IMenuService {
    retrieveMenu(): Promise<MenuRecipe[]>;
    removeRecipeFromMenu(recipeIds: number[]): Promise<any>;
    hardForceSync(recipeId: number): Promise<any>;
    forceSync(ingredientIds: number[]): Promise<any>;
    sortMenuRecipes(recipes: MenuRecipe[]): MenuRecipe[];
}

export class MenuService implements IMenuService {
    private apiManager = new MenuApiManager();

    retrieveMenu(): Promise<MenuRecipe[]> {
        return this.apiManager.retrieveMenu();
    }

    removeRecipeFromMenu(recipeIds: number[]): Promise<any> {
        return this.apiManager.removeRecipeFromMenu(recipeIds);
    }

    hardForceSync(recipeId: number): Promise<any> {
        return this.apiManager.hardForceSync(recipeId);
    }

    forceSync(ingredientIds: number[]): Promise<any> {
        return this.apiManager.forceSync(ingredientIds);
    }

    sortMenuRecipes(recipes: MenuRecipe[]): MenuRecipe[] {
        return recipes.sort((a, b) => {
            const nameA = a.name.toUpperCase();
            const nameB = b.name.toUpperCase();
            if (nameA < nameB) {
                return -1;
            }
            if (nameA > nameB) {
                return 1;
            }
            return 0;
        });
    }
}