import Ingredient from '../../Ingredient/Ingredient'

const IngredientOfShoppingListView = (props) => {

    const ingredient = props.ingredient
    const items = props.items
    const setToZero = props.setToZero
    const remove = props.remove
    const edit = props.edit

    return (<div><button onClick={() => setToZero(ingredient)}>set to 0</button>
        <Ingredient remove={remove}
            ingredient={ingredient}
            items={items}
            edit={edit}
        /> </div>)
}
export default IngredientOfShoppingListView


