import { SearchItemAnd} from "../SearchItemAnd/SearchItemAnd"
import EditIngredient from "../ingredient/EditIngredient"
import { IngredientType } from "../../models/IngredientType"

type SearchItemAndCreateIngredientProps_ = {
    onSubmit: (ingredient: IngredientType) => void
    cancel?: () => void
}

export const SearchItemAndCreateIngredient = ({onSubmit, cancel}: SearchItemAndCreateIngredientProps_) => {
    return <SearchItemAnd
        onEdit={onSubmit}
        cancel={cancel!}
        editComponent={(item: any, handleEdit: any, cancel: any) =>
            <EditIngredient
                quantityEditedCallback={handleEdit}
                ingredient={{ quantity: 1, item: item } as IngredientType}
                cancel={cancel}
            />}
    />
}