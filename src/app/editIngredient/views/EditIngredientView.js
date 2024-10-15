const EditIngredientView = (props) => {

    const item = props.item
    const setQuantity = props.setQuantity
    const sendIngredientWithQuantity = props.sendIngredientWithQuantity
    const quantity=props.quantity

    return (<div id='EditItemDiv'>
        {item.name} / {item.quantityType}
        <input autoFocus placeholder="1" onChange={value => setQuantity(value.target.value)}></input>
        <button onClick={() => sendIngredientWithQuantity(quantity)}>submit</button>
    </div>
    )


}

export default EditIngredientView