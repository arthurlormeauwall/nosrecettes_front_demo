import { useState, useEffect } from "react";
import { Recipe } from "../../models/Recipe";
import { FormField, TextInput } from "../UI_Kit";

type CreateRecipeInfoEditProps = {
    recipe: Recipe;
    onUpdate: (recipe: Recipe) => void;
};

export const CreateRecipeInfoEdit = ({ recipe, onUpdate }: CreateRecipeInfoEditProps) => {
    const [name, setName] = useState(recipe.name);
    const [source, setSource] = useState(recipe.source);
    const [type, setType] = useState(recipe.type);

    // Auto-update parent when fields change
    useEffect(() => {
        const updatedRecipe = {
            ...recipe,
            name,
            source,
            type
        };
        onUpdate(updatedRecipe);
    }, [name, source, type]);

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
        </div>
    );
};
