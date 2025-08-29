import { IngredientType } from "../../models/IngredientType";
import { ShoppingListIngredientInfo, EditButton, RemoveButton } from "../UI_Kit";

type RecipeIngredientViewProps = {
    ingredient: IngredientType;
    remove: (ing: IngredientType) => void;
    callback: () => void;
};

export const RecipeIngredientView = ({ ingredient, remove, callback }: RecipeIngredientViewProps) => {
    const onClick = () => {
        callback();
    };

    const handleRemove = () => {
        remove(ingredient);
    };

    return (
        <>
            <div className="recipe-ingredient__ingredient">
                <ShoppingListIngredientInfo 
                    name={ingredient.item.name} 
                    quantityType={ingredient.item.quantityType} 
                    quantity={ingredient.quantity}
                />
            </div>
            <div className="recipe-ingredient__actions">
                <EditButton onClick={() => onClick()}>edit</EditButton>
                <RemoveButton onClick={() => handleRemove()}>remove</RemoveButton>
            </div>
        </>
    );
};