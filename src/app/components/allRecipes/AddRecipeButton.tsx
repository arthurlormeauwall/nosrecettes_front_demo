import { AddRecipeButtonView } from "../../views/allRecipes/AddRecipeButtonView";

type AddRecipeButtonProps = {
    handleAddRecipe: () => void;
};

export const AddRecipeButton = ({ handleAddRecipe }: AddRecipeButtonProps) => {
    return <AddRecipeButtonView onAddRecipe={handleAddRecipe} />;
};