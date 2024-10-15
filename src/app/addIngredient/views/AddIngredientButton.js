const AddIngredientButton = (props) => {
    const callback = props.callback

    const onClick=()=>{
        callback(null, "addIngredient")
    }
    return (<button onClick={onClick}>Add ingredient</button>)
}

export default AddIngredientButton