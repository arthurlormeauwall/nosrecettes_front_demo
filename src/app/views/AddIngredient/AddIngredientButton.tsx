import { ActionButton } from "../UI_Kit";

type AddIngredientButtonProps = {
    handleAddClick: () => void
}

export const AddIngredientButton = ({ handleAddClick }: AddIngredientButtonProps) => {
    return (
        <div className="add-ingredient-button">
            <ActionButton onClick={handleAddClick} variant="primary">Add item</ActionButton>
        </div>
    )
}