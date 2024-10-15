import { useState, useEffect } from "react"
import ItemCreationForm from "./ItemCreationForm"
import AddNewItemView from "./views/AddNewItemView"

const AddNewItem = (props) => {

    const client = props.client

    const [items, setItems] = useState([])
    const [displayDoesExist, setDisplayExist] = useState(false)
    useEffect(() => {
        client.retrieveItems()
            .then((data) => {
                setItems(data);
            });
    }, []);


    const itemDoesNotExist = (item) => {
        return items
            .filter(it => it.name == item.name)
            .filter(it => it.quantityType == item.quantityType)
        [0]
    }

    const itemNotEmpty = (item) => {
        return item.name != "" && item.quantityType != ""
    }

    const itemCreatedCallback = (formData) => {
        const item = formData
        if (itemDoesNotExist(item) || itemNotEmpty(item)) {
            console.log("New item is : " + item.name + " and quantityType :" + item.quantityType)
            client.updateItem(item)
        }
        else
            setDisplayExist(true)
    }

    return <AddNewItemView
        setDisplayExist={setDisplayExist}
        itemCreatedCallback={itemCreatedCallback}
        displayDoesExist={displayDoesExist}
        items={items}
    />
}

export default AddNewItem