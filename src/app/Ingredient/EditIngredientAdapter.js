import EditIngredient from "../editIngredient/EditIngredient"
const EditIngredientAdapter = (props) => {

    const item = props.propsToPass.item
    const elementEditedCallback = props.callback
    const ingredient = props.propsToPass.ingredient

    return (<EditIngredient
        item={item}
        elementEditedCallback={elementEditedCallback}
        ingredient={ingredient}
    />
    )
}

export default EditIngredientAdapter