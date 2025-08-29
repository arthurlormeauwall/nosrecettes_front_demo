import { useEffect, useState } from "react";
import { Recipe } from "../../models/Recipe";
import { IngredientType } from "../../models/IngredientType";
import { CreateRecipeFormView } from "../../views/editARecipe/CreateRecipeFormView";

export type CreateRecipeCommand = {
    createRecipe: (recipe: Recipe) => void;
    goBack: () => void;
};

type CreateRecipeFormProps = {
    emptyRecipe: Recipe;
    command: CreateRecipeCommand;
};

export const CreateRecipeForm = ({ emptyRecipe, command }: CreateRecipeFormProps) => {
    const [recipe, setRecipe] = useState({ ...emptyRecipe });

    useEffect(() => {
        setRecipe({ ...emptyRecipe });
    }, [emptyRecipe]);

    const save = () => {
        command.createRecipe(recipe);
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
        <CreateRecipeFormView
            recipe={recipe}
            command={command}
            save={save}
            ingredientEditedCallback={ingredientsEditedCallback}
            onRecipeInfoUpdate={handleRecipeInfoUpdate}
        />
    );
};
