import { Recipe } from "../../models/Recipe";
import { CreateRecipeInfoEdit } from "../../views/editARecipe/CreateRecipeInfoEdit";

export type CreateRecipeInfoCommand = {
    onUpdate: (recipe: Recipe) => void;
    onCancel: () => void;
};

type CreateRecipeInfoProps = {
    recipe: Recipe;
    command: CreateRecipeInfoCommand;
};

export const CreateRecipeInfo = ({ recipe, command }: CreateRecipeInfoProps) => {
    return (
        <CreateRecipeInfoEdit 
            recipe={recipe} 
            onUpdate={command.onUpdate} 
        />
    );
};
