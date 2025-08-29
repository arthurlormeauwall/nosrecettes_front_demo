import { Recipe } from "../../models/Recipe";
import { IRecipeService, RecipePerType } from "../../service/RecipeService";
import { RecipeListView } from "../../views/allRecipes/RecipeListView";

type RecipeListProps = {
    recipes: Recipe[];
    addToMenu: (id: number) => void;
    edit: (recipe: Recipe) => void;
    recipeService: IRecipeService;
};

export const RecipeList = ({ recipes, addToMenu, edit, recipeService }: RecipeListProps) => {
    const recipesGroupedByType: RecipePerType = recipeService.getRecipesGroupedByType(recipes);
    
    return (
        <RecipeListView
            recipesGroupedByType={recipesGroupedByType}
            addToMenu={addToMenu}
            edit={edit}
            recipeService={recipeService}
        />
    );
};