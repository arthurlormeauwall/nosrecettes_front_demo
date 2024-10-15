import EditRecipeForm from "../editRecipe/EditRecipeForm"

const AddNewRecipe = (props) => {
    const client= props.propsToPass.client
    const callback=props.callback
    const items=props.propsToPass.items
    const createRecipe=(recipe)=>{
        callback(recipe)
    }

    return <EditRecipeForm elementEditedCallback={createRecipe} items={items} client={client}/>
}

export default AddNewRecipe