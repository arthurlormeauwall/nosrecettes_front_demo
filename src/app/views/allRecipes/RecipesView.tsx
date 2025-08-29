import { Recipe } from "../../models/Recipe";
import { AddRecipeButton } from "../../components/allRecipes/AddRecipeButton";
import { RecipeList } from "../../components/allRecipes/RecipeList";
import SearchWithRegex, { ElementWithName } from "../../components/AutoCompleteSearch/SearchWithRegex";
import { IRecipeService } from "../../service/RecipeService";

type RecipesViewProps = {
    handleAddRecipe: () => void;
    addRecipeToMenu: (id: number) => void;
    recipes: Recipe[];
    selectedRecipes: Recipe[];
    onFilter: (allRecipes: ElementWithName[]) => void;
    edit: (recipe: Recipe) => void;
    recipeService: IRecipeService;
};

export const RecipesView = ({ handleAddRecipe, addRecipeToMenu, edit, recipes, selectedRecipes, onFilter, recipeService }: RecipesViewProps) => {
    return (
        <div className="recipes-list">
            <div className="recipes-list__header">
                <h1>Recipes</h1>
                <AddRecipeButton handleAddRecipe={handleAddRecipe} />
            </div>
            
            <div className="recipes-list__search">
                <SearchWithRegex
                    elementsToSearchIn={recipes}
                    getMatchingElements={onFilter}
                    autoFocus={true}
                />
            </div>
            
            {selectedRecipes.length > 0 ? (
                <div className="recipe-list">
                    <RecipeList
                        recipes={selectedRecipes}
                        addToMenu={addRecipeToMenu}
                        edit={edit}
                        recipeService={recipeService}
                    />
                </div>
            ) : (
                <div className="recipes-empty">
                    <div className="recipes-empty__icon">🍳</div>
                    <h2 className="recipes-empty__title">No recipes found</h2>
                    <p className="recipes-empty__description">
                        Try adjusting your search or add a new recipe.
                    </p>
                </div>
            )}
        </div>
    );
};