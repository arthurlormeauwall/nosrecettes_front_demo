import ItemCreationForm from "../ItemCreationForm"

const AddNewItemView = (props) => {

    const displayDoesExist = props.displayDoesExist
    const setDisplayExist = props.setDisplayExist
    const itemCreatedCallback=props.itemCreatedCallback
    const items=props.items

    const conditionalRendering = () => {
        if (displayDoesExist) {
            return (<p>item already exist or empty item <button onClick={() => { setDisplayExist(false) }}>back</button></p>)
        }
        else {
            return <ItemCreationForm itemCreatedCallback={itemCreatedCallback} items={items} />
        }
    }
    return (
        <div id="AddNewRecipeDiv">
            {conditionalRendering()}

        </div>)
}

export default AddNewItemView