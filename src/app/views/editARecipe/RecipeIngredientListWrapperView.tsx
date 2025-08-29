import { IngredientType } from "../../models/IngredientType";
import { RecipeIngredientListView } from "./RecipeIngredientListView";
import AddIngredient from "../../components/AddIngredient/AddIngredient.tsx";

type RecipeIngredientListWrapperViewProps = {
    ingredients: IngredientType[];
    command: {
        remove: (ing: IngredientType) => void;
        edited: (ing: IngredientType) => void;
    };
    onAddIngredient: (ingredient: IngredientType) => void;
};

export const RecipeIngredientListWrapperView = ({ ingredients, command, onAddIngredient }: RecipeIngredientListWrapperViewProps) => {
    return (
        <div>
            <AddIngredient onAddIngredient={onAddIngredient} />
            <RecipeIngredientListView
                ingredients={ingredients}
                command={command}
            />
        </div>
    );
};