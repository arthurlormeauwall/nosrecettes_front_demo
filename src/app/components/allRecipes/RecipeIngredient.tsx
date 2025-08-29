import { Recipe } from "../../models/Recipe";
import { IRecipeService } from "../../service/RecipeService";
import { RecipeIngredientView } from "../../views/allRecipes/RecipeIngredientView";

type RecipeIngredientProps = {
    recipe: Recipe;
    addToMenu: (id: number) => void;
    edit: (recipe: Recipe) => void;
    recipeService: IRecipeService;
};

export const RecipeIngredient = ({ recipe, addToMenu, edit, recipeService }: RecipeIngredientProps) => {
    return (
        <RecipeIngredientView
            recipe={recipe}
            onAddToMenu={() => addToMenu(recipe.id!)}
            onEdit={() => edit(recipe)}
            recipeService={recipeService}
        />
    );
};