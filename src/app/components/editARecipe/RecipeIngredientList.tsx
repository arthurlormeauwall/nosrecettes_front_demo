import { useState } from "react";
import { IngredientType } from "../../models/IngredientType";
import { RecipeIngredientListWrapperView } from "../../views/editARecipe/RecipeIngredientListWrapperView";
import { listService } from "../../service/listService";

export type RecipeIngredientListCommand = {
    remove: (ing: IngredientType) => void;
    edited: (ing: IngredientType) => void;
};

type RecipeIngredientListProps = {
    initialIngredients: IngredientType[];
    onIngredientsChange: (ingredients: IngredientType[], ingredient: IngredientType) => void;
};

export const RecipeIngredientList = ({ initialIngredients, onIngredientsChange }: RecipeIngredientListProps) => {
    const [ingredients, setIngredients] = useState(initialIngredients);

    const handleAdd = (ingredient: IngredientType) => {
        const updatedIngredients = listService.add(ingredient, ingredients);
        // @ts-ignore
        setIngredients(updatedIngredients);
       // @ts-ignore
        onIngredientsChange(updatedIngredients, ingredient);
    };

    const handleRemove = (ingredient: IngredientType) => {
        const updatedIngredients = listService.remove(ingredient, ingredients);

        // @ts-ignore
        setIngredients(updatedIngredients);

        // @ts-ignore
        onIngredientsChange(updatedIngredients, ingredient);
    };

    const handleEdit = (ingredient: IngredientType) => {
        const updatedIngredients = listService.edit(ingredient, ingredients);

        // @ts-ignore
        setIngredients(updatedIngredients);

        // @ts-ignore
        onIngredientsChange(updatedIngredients, ingredient);
    };

    const command: RecipeIngredientListCommand = {
        remove: handleRemove,
        edited: handleEdit
    };

    return (
        <RecipeIngredientListWrapperView
            ingredients={ingredients}
            command={command}
            onAddIngredient={handleAdd}
        />
    );
};
