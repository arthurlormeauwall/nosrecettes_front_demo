import { Recipe } from "../../models/Recipe";
import { IngredientType } from "../../models/IngredientType";
import { RecipeIngredientList } from "../../components/editARecipe/RecipeIngredientList";
import { EditRecipeCommand } from "../../components/editARecipe/EditRecipeForm";
import { RecipeInfo, RecipeInfoCommand } from "../../components/editARecipe/RecipeInfo";
import { RecipeService } from "../../service/RecipeService";
import { SubmitButton, CancelButton, ActionButton } from "../UI_Kit";

type EditRecipeFormViewProps = {
    recipe: Recipe;
    command: EditRecipeCommand;
    save: () => void;
    ingredientEditedCallback: (ingredients: IngredientType[], ingredient: IngredientType) => void;
    onRecipeInfoUpdate: (recipe: Recipe) => void;
};

export const EditRecipeFormView = ({
    recipe,
    command,
    save,
    ingredientEditedCallback,
    onRecipeInfoUpdate
}: EditRecipeFormViewProps) => {
    const recipeService = new RecipeService();
    
    const recipeInfoCommand: RecipeInfoCommand = {
        onUpdate: onRecipeInfoUpdate
    };
    return (
        <div className="recipe-form">
            <div className="recipe-form__header">
                <div className="recipe-form__actions">
                    <SubmitButton onClick={() => save()}>Save Recipe</SubmitButton>
                    {recipe.id ? (
                        <ActionButton onClick={() => command.addToMenu(recipe)} variant="secondary">
                            Add to Menu
                        </ActionButton>
                    ) : null}
                    <CancelButton onClick={() => command.goBack()}>Cancel</CancelButton>
                </div>
            </div>
            
            <div className="recipe-form__content">
                <RecipeInfo
                    recipe={recipe}
                    command={recipeInfoCommand}
                    recipeService={recipeService}
                />

                <div id='IngredientListDiv'>
                    <p>
                        .....................
                    </p>

                    <RecipeIngredientList
                        initialIngredients={recipe.ingredients}
                        onIngredientsChange={ingredientEditedCallback}
                    />
                </div>
            </div>
        </div>
    );
};
