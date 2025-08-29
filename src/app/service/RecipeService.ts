import { Recipe } from "../models/Recipe";
import { RecipeApiManager } from "../api/recipes/RecipeApiManager";
import { MenuService } from "./MenuService";

export type RecipePerType = {
    [key: string]: Recipe[];
};

export interface IRecipeService {
    retrieveRecipes(): Promise<Recipe[]>;
    retrieveRecipe(id: number): Promise<Recipe>;
    updateRecipe(recipe: Recipe): Promise<Recipe>;
    updateRecipeAndForceSync(recipe: Recipe): Promise<Recipe>;
    addRecipeToMenu(recipeIds: number[]): Promise<any>;
    removeRecipeFromMenu(recipeIds: number[]): Promise<any>;
    getSource(recipe: Recipe): string;
    isALink(recipe: Recipe): boolean;
    sortRecipes(recipes: Recipe[]): Recipe[];
    createEmptyRecipe(): Recipe;
    createRecipe(recipe: Recipe): Promise<Recipe>;
    getRecipesGroupedByType(recipes: Recipe[]): RecipePerType;
    sortTypes(types: string[]): string[];
}

export class RecipeService implements IRecipeService {
    private apiManager = new RecipeApiManager();
    private menuService = new MenuService();

    retrieveRecipes(): Promise<Recipe[]> {
        return this.apiManager.retrieveRecipes();
    }

    retrieveRecipe(id: number): Promise<Recipe> {
        return this.apiManager.retrieveRecipe(id);
    }

    updateRecipe(recipe: Recipe): Promise<Recipe> {
        return this.apiManager.updateRecipe(recipe);
    }

    createRecipe(recipe: Recipe): Promise<Recipe> {
        return this.apiManager.updateRecipe(recipe);
    }

    updateRecipeAndForceSync(recipe: Recipe): Promise<Recipe> {
        return this.apiManager.updateRecipe(recipe)
            .then((updatedRecipe) => {
                // Si la recette a un ID, faire un forcesync pour synchroniser avec la liste de courses
                if (updatedRecipe.id) {
                    return this.menuService.hardForceSync(updatedRecipe.id)
                        .then(() => updatedRecipe);
                }
                return updatedRecipe;
            });
    }

    addRecipeToMenu(recipeIds: number[]): Promise<any> {
        return this.apiManager.addRecipeToMenu(recipeIds);
    }

    removeRecipeFromMenu(recipeIds: number[]): Promise<any> {
        return this.apiManager.removeRecipeFromMenu(recipeIds);
    }

    getSource(recipe: Recipe): string {
        if (recipe.source.match('^https?:\/\/')) {
            return recipe.source;
        } else {
            return "https://" + recipe.source;
        }
    }

    isALink(recipe: Recipe): boolean {
        return recipe.source.includes("www") || recipe.source.includes("fr")
            || recipe.source.includes("com")
            || recipe.source.includes("net")
            || recipe.source.includes("uk")
            || recipe.source.includes("us")
            || recipe.source.includes("/");
    }

    sortRecipes(recipes: Recipe[]): Recipe[] {
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

    createEmptyRecipe(): Recipe {
        return {
            name: "",
            source: "",
            type: "",
            season: "UNKNOWN",
            ingredients: []
        };
    }

    getRecipesGroupedByType(recipes: Recipe[]): RecipePerType {
        let recipePerType: RecipePerType = {};
        
        recipes.forEach((recipe: Recipe) => {
            let type = recipe.type || "No type";
            if (recipePerType[type]) {
                recipePerType[type] = [...recipePerType[type], recipe];
            } else {
                recipePerType[type] = [recipe];
            }
        });

        // Sort recipes within each type alphabetically
        Object.keys(recipePerType).forEach(type => {
            recipePerType[type] = this.sortRecipes(recipePerType[type]);
        });

        return recipePerType;
    }

    sortTypes(types: string[]): string[] {
        return types.sort((a, b) => {
            const nameA = a.toUpperCase();
            const nameB = b.toUpperCase();
            
            // Mettre "NO TYPE" et "UNKNOWN" à la fin
            const isASpecial = nameA === "NO TYPE" || nameA === "UNKNOWN";
            const isBSpecial = nameB === "NO TYPE" || nameB === "UNKNOWN";
            
            if (isASpecial && !isBSpecial) {
                return 1; // a après b
            }
            if (!isASpecial && isBSpecial) {
                return -1; // a avant b
            }
            
            // Tri normal si les deux sont spéciaux ou les deux sont normaux
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
