import Autocomplete from "../../util/utilComponent/Autocomplete";

const EditExistingItemFormView = (props) => {
    const formData = props.formData
    const itemType = props.itemType
    const itemCreatedCallBack = props.itemCreatedCallback
    const handleInputChange = props.handleInputChange

    const typeSubmitCallback = props.typeSubmitCallback
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
            <div>
                <label>Type:</label>
                {itemType}
                <Autocomplete 
                    autoFocus={true}
                    onChangeCallback={typeSubmitCallback}
                    onSubmitCallback={typeSubmitCallback}
                    onSelectionCallback={typeSubmitCallback}
                    elements={getItemTypes()}
                />
            </div>
        </div>

    </div>)
}

export default EditExistingItemFormView