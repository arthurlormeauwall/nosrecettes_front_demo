import { useState } from "react"
import ItemCreationFormView from "./views/ItemCreationFormView";

const ItemCreationForm = (props) => {
    const [formData, setFormData] = useState({
        name: "",
        quantityType: "GR",
        type: ""
    })
    const [itemType, setType] = useState("")


    const itemCreatedCallBack = props.itemCreatedCallback
    const items = props.items

    const handleInputChange = (input) => {
        const { name, value } = input;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const typeSubmitCallback = (input) => {
        const type = input.name
        setType(type)
        setFormData({
            ...formData,
            type: type
        })
    }

    const quantityTypePossibilities = [
        { value: 'GR', label: 'GR' },
        { value: 'AMOUNT', label: 'AMOUNT' },
        { value: 'ML', label: 'ML' },
    ]

    const getItemTypes = () => {
        let resultInter = {}
        let result = []
        items.forEach(item => {
            resultInter[item.type] = item.type
        })
        Object.keys(resultInter).forEach(type => result.push({ name: type }))
        return result
    }

    return <ItemCreationFormView
        formData={formData}
        itemType={itemType}
        itemCreatedCallback={itemCreatedCallBack}
        handleInputChange={handleInputChange}
        typeSubmitCallback={typeSubmitCallback}
        quantityTypePossibilities={quantityTypePossibilities}
        getItemTypes={getItemTypes}
    />
}

export default ItemCreationForm