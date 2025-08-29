import { useState } from "react"
import ItemCreationFormView from "../../views/SearchItemAnd/ItemCreationFormView";
import { ItemService } from "../../service/ItemService";
import { Item } from "../../models/Item";
import { ElementWithName } from "../AutoCompleteSearch/SearchWithRegex";

type ItemCreationFormProps = {
    itemCreatedCallBack: (item : Item)=>void    
    items: Item[]
    cancel?: () => void
    name?: string
    existingItem?: Item
}

export type InputChangeType = {
    name: string,
    value: string
}

const ItemCreationForm = ({itemCreatedCallBack, items, cancel, name, existingItem}: ItemCreationFormProps) => {

    const [item, setItem] = useState(() => {
        if (existingItem) {
            return { ...existingItem };
        }
        return {
            name: name ? name : "",
            quantityType: "AMOUNT",
            type: ""
        } as Item;
    })

    const handleInputChange = (input: InputChangeType) => {
        const { name, value } = input;
        setItem({
            ...item,
            [name]: value,
        });
    };

    return <ItemCreationFormView
        item={item}
        itemCreatedCallBack={itemCreatedCallBack}
        handleInputChange={handleInputChange}
        quantityTypePossibilities={ItemService.quantityTypePossibilities}
        getItemTypes={()=> {
            const types = [...new Set(items.map((item: Item) => item.type))] 
            const elementTypes : ElementWithName[] = []
            types.forEach((type: string) => elementTypes.push({name: type}))
            return elementTypes
        }}
        cancel={cancel}
        />
}

export default ItemCreationForm