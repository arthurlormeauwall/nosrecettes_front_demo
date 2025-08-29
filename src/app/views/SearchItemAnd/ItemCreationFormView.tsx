import { useState } from "react"
import AutoCompleteSearch from "../../components/AutoCompleteSearch/AutoCompleteSearch"
import { InputChangeType } from "../../components/item/ItemCreationForm"
import { Item } from "../../models/Item"
import { ElementWithName } from "../../components/AutoCompleteSearch/SearchWithRegex"
import { FormField, TextInput, SelectInput, SubmitButton, CancelButton, ButtonGroup } from "../UI_Kit"


type ItemCreationFormViewProps = {
    item: Item,
    itemCreatedCallBack: (item: Item) => void,
    handleInputChange: (input: InputChangeType) => void,
    quantityTypePossibilities: string[],
    getItemTypes: () => ElementWithName[]
    cancel?: () => void
}

const ItemCreationFormView = ({ item, itemCreatedCallBack, handleInputChange, quantityTypePossibilities, getItemTypes, cancel }: ItemCreationFormViewProps) => {

    const [type, setType] = useState(item.type || "")
    const itemTypes: ElementWithName[] = getItemTypes()

    const onTypeSubmit = (input: ElementWithName) => {
        setType(input.name)
        handleInputChange({ name: "type", value: input.name })

    }
    const handleTypeChange = (input: string) => {
        setType(input)
        handleInputChange({ name: "type", value: input })
    }

    return (<div>
        <FormField label="Name">
            <TextInput
                autoFocus
                name="name"
                value={item.name}
                onChange={(e) => handleInputChange(e.target)}
            />
        </FormField>

        <FormField label="Quantity Type">
            <SelectInput
                id="quantityType"
                name="quantityType"
                value={item.quantityType}
                onChange={(e) => handleInputChange(e.target)}
                options={quantityTypePossibilities}
            />
        </FormField>

        <FormField label="Type">
            <div>
                {type}
                <AutoCompleteSearch
                    onSelectionCallback={onTypeSubmit}
                    elements={itemTypes}
                    autoFocus={true}
                    onChange={handleTypeChange}
                    value={type}
                />
            </div>
        </FormField>

        <ButtonGroup>
            <SubmitButton onClick={() => itemCreatedCallBack(item)}>Update</SubmitButton>
            {cancel && <CancelButton onClick={() => cancel()}>Cancel</CancelButton>}
        </ButtonGroup>
    </div>)
}

export default ItemCreationFormView