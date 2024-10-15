import EditIngredient from "../editIngredient/EditIngredient"

const EditIngredientAdapter = (props)=>{
    const item = props.elements
    const callback = props.callback

    return <EditIngredient item={item} elementEditedCallback={callback}/>
}
export default EditIngredientAdapter