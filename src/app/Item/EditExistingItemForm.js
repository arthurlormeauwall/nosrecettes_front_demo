import { useState } from "react"
import EditExistingItemFormView from "./views/EditExistingItemFormView"

const EditExistingItemForm = (props) => {
    const selectedItem= props.elements
    const [formData, setFormData] = useState({
        name: selectedItem.name,
        quantityType: selectedItem.quantityType,
        type: selectedItem.type,
        id: selectedItem.id
    })
    const [itemType, setType] = useState(selectedItem.type)


    const itemCreatedCallBack = props.callback
    const items = props.propsToPass.items

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

    return <EditExistingItemFormView
        formData={formData}
        itemType={itemType}
        itemCreatedCallback={itemCreatedCallBack}
        handleInputChange={handleInputChange}
        typeSubmitCallback={typeSubmitCallback}
        quantityTypePossibilities={quantityTypePossibilities}
        getItemTypes={getItemTypes}
    />
}

export default EditExistingItemForm