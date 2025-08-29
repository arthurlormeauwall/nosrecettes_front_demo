import { useState } from "react";
import { Recipe } from "../../models/Recipe";
import { FormField, TextInput, SubmitButton, CancelButton, ButtonGroup } from "../UI_Kit";

type RecipeInfoEditProps = {
    recipe: Recipe;
    onSubmit: (recipe: Recipe) => void;
    onCancel: () => void;
};

export const RecipeInfoEdit = ({ recipe, onSubmit, onCancel }: RecipeInfoEditProps) => {
    const [name, setName] = useState(recipe.name);
    const [source, setSource] = useState(recipe.source);
    const [type, setType] = useState(recipe.type);

    const handleSubmit = () => {
        const updatedRecipe = {
            ...recipe,
            name,
            source,
            type
        };
        onSubmit(updatedRecipe);
    };

    const handleCancel = () => {
        // Reset to original values
        setName(recipe.name);
        setSource(recipe.source);
        setType(recipe.type);
        onCancel();
    };

    return (
        <div>
            <FormField label="Name">
                <TextInput
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    autoFocus
                />
            </FormField>
            <FormField label="Source">
                <TextInput
                    value={source}
                    onChange={(e) => setSource(e.target.value)}
                />
            </FormField>
            <FormField label="Type">
                <TextInput
                    value={type}
                    onChange={(e) => setType(e.target.value)}
                />
            </FormField>
            <ButtonGroup>
                <SubmitButton onClick={handleSubmit}>Save</SubmitButton>
                <CancelButton onClick={handleCancel}>Cancel</CancelButton>
            </ButtonGroup>
        </div>
    );
};