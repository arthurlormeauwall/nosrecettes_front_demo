import { useEffect, useState } from "react";
import { Recipe } from "../../models/Recipe";
import { IngredientType } from "../../models/IngredientType";
import { EditRecipeFormView } from "../../views/editARecipe/EditRecipeFormView";

export type EditRecipeCommand = {
    updateRecipe: (recipe: Recipe) => void;
    addToMenu: (recipe: Recipe) => void;
    goBack: () => void;
};

type EditRecipeFormProps = {
    fullRecipe: Recipe;
    command: EditRecipeCommand;
};

export const EditRecipeForm = ({ fullRecipe, command }: EditRecipeFormProps) => {
    const [recipe, setRecipe] = useState({ ...fullRecipe });

    useEffect(() => {
        setRecipe({ ...fullRecipe });
    }, [fullRecipe]);

    const save = () => {
        command.updateRecipe(recipe);
    };

    const handleInputChange = (input: any) => {
        const { name, value } = input;
        setRecipe({
            ...recipe,
            [name]: value,
        });
    };

    const handleRecipeInfoUpdate = (updatedRecipe: Recipe) => {
        setRecipe(updatedRecipe);
    };

    const ingredientsEditedCallback = (ingredients: IngredientType[], _ingredient: IngredientType) => {
        handleInputChange({ name: "ingredients", value: ingredients });
    };

    return (
        <EditRecipeFormView
            recipe={recipe}
            command={command}
            save={save}
            ingredientEditedCallback={ingredientsEditedCallback}
            onRecipeInfoUpdate={handleRecipeInfoUpdate}
        />
    );
};
