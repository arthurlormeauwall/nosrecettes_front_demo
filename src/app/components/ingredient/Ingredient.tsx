import { IngredientFromShoppingList } from "../../models/IngredientFromShoppingList"
import EditIngredient from "./EditIngredient"
import { InPlaceToggleEditandViewComponent } from "../../views/UI_Kit/Behavioral/EditableComponent/InPlaceToggleEditandViewComponent"
import {FormProps} from "../../views/UI_Kit/Behavioral/EditableComponent/EditableComponent.ts";

export const Ingredient = ({ ingredient, command, ingredientView }: any) => {
    return <InPlaceToggleEditandViewComponent
        factory={{
            editing: false,
            viewComponent: ingredientView,
            editComponent: ({ onSubmit, cancel, data }: FormProps<IngredientFromShoppingList>) =>
                () => <EditIngredient quantityEditedCallback={onSubmit} ingredient={data!} cancel={cancel!} />
        }}
        formProps={{
            data: ingredient,
            onSubmit: command.edited,
        }} />

}
