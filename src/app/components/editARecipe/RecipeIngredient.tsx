import { IngredientType } from "../../models/IngredientType";
import { RecipeIngredientWrapperView } from "../../views/editARecipe/RecipeIngredientWrapperView";
import { RecipeIngredientListCommand } from "./RecipeIngredientList";

type RecipeIngredientProps = {
    ingredient: IngredientType;
    command: RecipeIngredientListCommand;
};

export const RecipeIngredient = ({ ingredient, command }: RecipeIngredientProps) => {
    return (
        <RecipeIngredientWrapperView
            ingredient={ingredient}
            command={command}
        />
    );
};