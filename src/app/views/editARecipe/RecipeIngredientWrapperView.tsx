import { IngredientType } from "../../models/IngredientType";
import { Ingredient } from "../../components/ingredient/Ingredient";
import { RecipeIngredientView } from "./RecipeIngredientView";
import { RecipeIngredientListCommand } from "../../components/editARecipe/RecipeIngredientList";

type RecipeIngredientWrapperViewProps = {
    ingredient: IngredientType;
    command: RecipeIngredientListCommand;
};

export const RecipeIngredientWrapperView = ({ ingredient, command }: RecipeIngredientWrapperViewProps) => {
    return (
        <dd className="recipe-ingredient__item">
            <Ingredient
                ingredient={ingredient}
                command={command}
                ingredientView={({ trigger }: { trigger: () => void }) =>
                    () => <RecipeIngredientView
                        ingredient={ingredient}
                        remove={command.remove}
                        callback={trigger}
                    />
                }
            />
        </dd>
    );
};