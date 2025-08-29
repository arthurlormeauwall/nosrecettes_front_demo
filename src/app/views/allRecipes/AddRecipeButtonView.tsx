import { ActionButton } from "../UI_Kit";

type AddRecipeButtonViewProps = {
    onAddRecipe: () => void;
};

export const AddRecipeButtonView = ({ onAddRecipe }: AddRecipeButtonViewProps) => {
    return <ActionButton onClick={onAddRecipe}>Add a recipe</ActionButton>;
};