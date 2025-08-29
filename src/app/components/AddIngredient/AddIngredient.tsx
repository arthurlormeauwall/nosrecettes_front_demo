
import { AddIngredientButton } from "../../views/AddIngredient/AddIngredientButton"
import { IngredientType } from "../../models/IngredientType"
import { SearchItemAndCreateIngredient } from "./SearchItemAndCreateIngredient"
import { InPlaceToggleEditandViewComponent } from "../../views/UI_Kit/Behavioral/EditableComponent/InPlaceToggleEditandViewComponent"
import {FormProps, TriggerProps} from "../../views/UI_Kit/Behavioral/EditableComponent/EditableComponent.ts";

type AddIngredientButtonProps = {
    onAddIngredient: (ing: IngredientType) => void
}

const AddIngredient = ({ onAddIngredient }: AddIngredientButtonProps) => {
    return <InPlaceToggleEditandViewComponent
        factory={
            {
                editing: false,
                viewComponent: ({ trigger }: TriggerProps) => {
                    return () => <AddIngredientButton handleAddClick={trigger} />
                },
                editComponent: ({ onSubmit, cancel }: FormProps<IngredientType>) => {
                    return ()=><SearchItemAndCreateIngredient
                        onSubmit={onSubmit}
                        cancel={cancel}
                    />
                }
            }}
        formProps={{ onSubmit: onAddIngredient }}
    />
}

export default AddIngredient
