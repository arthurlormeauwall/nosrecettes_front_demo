import { Recipe } from "../../models/Recipe";
import { IngredientType } from "../../models/IngredientType";
import { RecipeIngredientList } from "../../components/editARecipe/RecipeIngredientList";
import { CreateRecipeCommand } from "../../components/editARecipe/CreateRecipeForm";
import { CreateRecipeInfo, CreateRecipeInfoCommand } from "../../components/editARecipe/CreateRecipeInfo";
import { SubmitButton, CancelButton } from "../UI_Kit";

type CreateRecipeFormViewProps = {
    recipe: Recipe;
    command: CreateRecipeCommand;
    save: () => void;
    ingredientEditedCallback: (ingredients: IngredientType[], ingredient: IngredientType) => void;
    onRecipeInfoUpdate: (recipe: Recipe) => void;
};

export const CreateRecipeFormView = ({
    recipe,
    command,
    save,
    ingredientEditedCallback,
    onRecipeInfoUpdate
}: CreateRecipeFormViewProps) => {

    const recipeInfoCommand: CreateRecipeInfoCommand = {
        onUpdate: onRecipeInfoUpdate,
        onCancel: command.goBack
    };
    
    return (
        <div className="recipe-form">
            <div className="recipe-form__header">
                <div className="recipe-form__actions">
                    <SubmitButton onClick={() => save()}>Create Recipe</SubmitButton>
                    <CancelButton onClick={() => command.goBack()}>Cancel</CancelButton>
                </div>
            </div>
            
            <div className="recipe-form__content">
                <CreateRecipeInfo
                    recipe={recipe}
                    command={recipeInfoCommand}
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
