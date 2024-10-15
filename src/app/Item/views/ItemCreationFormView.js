import Autocomplete from "../../util/utilComponent/Autocomplete";

const ItemCreationFormView = (props) => {
    const formData = props.formData
    const itemType = props.itemType
    const itemCreatedCallBack = props.itemCreatedCallback
    const handleInputChange = props.handleInputChange

    const typeSubmitCallback = props.typeSubmitCallback
    const quantityTypePossibilities = props.quantityTypePossibilities
    const getItemTypes = props.getItemTypes

    return (<div>
        <button onClick={() => itemCreatedCallBack(formData)}>Update</button>
        <div>
            <label>Name:</label>
            <input
                autoFocus
                type="text"
                name="name"
                value={formData.name}
                onChange={(value) => handleInputChange(value.target)}
            />
        </div>

        <div>
            <select
                id="quantityType"
                name="quantityType"
                value={formData.quantityType}
                onChange={(value) => handleInputChange(value.target)}
            >
                {quantityTypePossibilities.map(entry => (<option value={entry.value}>{entry.label}</option>))}
            </select>
            <div>
                <label>Type:</label>
                {itemType}
                <Autocomplete
                    onSubmitCallback={typeSubmitCallback}
                    onSelectionCallback={typeSubmitCallback}
                    elements={getItemTypes()}
                />
            </div>
        </div>
    </div>)
}

export default ItemCreationFormView