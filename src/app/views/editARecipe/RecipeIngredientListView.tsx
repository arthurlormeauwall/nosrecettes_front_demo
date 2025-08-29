import { IngredientType } from "../../models/IngredientType";
import { RecipeIngredient } from "../../components/editARecipe/RecipeIngredient";
import { RecipeIngredientListCommand } from "../../components/editARecipe/RecipeIngredientList";

type RecipeIngredientListViewProps = {
    ingredients: IngredientType[];
    command: RecipeIngredientListCommand;
};

export const RecipeIngredientListView = ({ ingredients, command }: RecipeIngredientListViewProps) => {
    return (
        <dl className="recipe-ingredient-list__items">
            {ingredients.map((ingredient) => (
                <RecipeIngredient
                    key={ingredient.id}
                    ingredient={ingredient}
                    command={command}
                />
            ))}
        </dl>
    );
};