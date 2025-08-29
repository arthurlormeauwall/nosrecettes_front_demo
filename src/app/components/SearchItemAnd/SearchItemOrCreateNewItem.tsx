import { useState } from "react"
import { SearchItemView } from "../../views/SearchItemAnd/SearchItemView"
import InPlaceConditionalRenderer from "../../views/UI_Kit/Behavioral/InPlaceConditionalRenderer"
import { Item } from "../../models/Item"
import { ElementWithName } from "../AutoCompleteSearch/SearchWithRegex"
import ItemCreationForm from "../item/ItemCreationForm"

type SearchItemOrCreateNewItemProps = {
    items: Item[]
    onSelection: (item: Item) => void
    cancel: () => void
}

export const SearchItemOrCreateNewItem = ({ items, onSelection, cancel }: SearchItemOrCreateNewItemProps) => {
    const [edited, setEdited] = useState(false)
    const [name, setName] = useState("" as string)

        const handleChange = (name: string) => {
        setName(name)
    }

    const handleItemCreated = (item: Item) => {
        setEdited(false)
        onSelection(item)
    }

    const Edit = <ItemCreationForm
        itemCreatedCallBack={handleItemCreated}
        items={items}
        cancel={cancel}
        name={name}
         />

   const Search = <SearchItemView
        items={items}
        onSelection={(e: ElementWithName) => {
            const item: Item = e as Item
            onSelection(item)
        }}
        onChange={handleChange}
        cancel={cancel}
        onCreateNewItem={() => setEdited(true)}
    />

    return <InPlaceConditionalRenderer
        condition={edited}
        ComponentA={() => Edit}
        ComponentB={() => Search}
    />
}