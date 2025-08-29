import { useEffect, useState } from "react"

import { ElementWithName } from "../AutoCompleteSearch/SearchWithRegex"

import { Item } from "../../models/Item"
import InPlaceConditionalRenderer from "../../views/UI_Kit/Behavioral/InPlaceConditionalRenderer"
import { ItemApiManager } from "../../api/item/ItemApiManager"
import { SearchItemOrCreateNewItem } from "./SearchItemOrCreateNewItem"

type SearchItemAndCreateIngredientProps<T> = {
    onEdit: (t: T) => void
    cancel: () => void
    editComponent: (item: any, handleEdit: any, cancel: any) => any
}
export const SearchItemAnd = <T,>(props: SearchItemAndCreateIngredientProps<T>) => {

    const [items, setItems] = useState<Item[]>([]);

    const apiManager = new ItemApiManager()

    const fetchData = async () => {
        const itemsData = await apiManager.retrieveItems();
        setItems(itemsData);
    };

    useEffect(() => {
        fetchData();
    }, []);

    return <SearchItemAnd_ {...props} items={items} />
}

export type SearchItemAndCreateIngredientProps_<T> = {
    onEdit: (t: T) => void
    cancel: () => void
    editComponent: (item: any, handleEdit: any, cancel: any) => any
    items: Item[]
}

export const SearchItemAnd_ = <T,>({ onEdit, cancel, editComponent, items }: SearchItemAndCreateIngredientProps_<T>) => {
    const [edited, setEdited] = useState(false)

    const [item, setItem] = useState({} as Item)

    const onSelection = (item: ElementWithName) => {
        setItem(item as Item)
        setEdited(true)
    }

    const handleEdited: (t: T) => void = (t: T) => {
        setEdited(false)
        onEdit(t)
    }

    const Search = <SearchItemOrCreateNewItem
        items={items}
        onSelection={onSelection}
        cancel={cancel}
    />

    const Edit = editComponent(item, handleEdited, cancel)

    return <InPlaceConditionalRenderer
        condition={edited}
        ComponentA={() => Edit}
        ComponentB={() => Search}
    />
}