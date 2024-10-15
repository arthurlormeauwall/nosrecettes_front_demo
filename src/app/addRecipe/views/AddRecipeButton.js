const AddRecipeButton = (props) => {
    const callback = props.callback
    return (<button onClick={callback}>Add a recipe</button>)
}

export default AddRecipeButton