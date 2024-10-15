import IngredientOfShoppingListView from "./IngredientOfShoppingListView"

const IngredientPerItemView = (props) => {

    const items = props.items
    const setToZero = props.setToZero
    const remove = props.remove
    const edit = props.edit
    const ingredientPerType = props.ingredientPerType


    return Object.keys(ingredientPerType)
        .map((type, index) =>
            <div> {type}
                <dl>
                    {ingredientPerType[type].map(ingredient =>
                        <dd key={ingredient.id}> <IngredientOfShoppingListView
                            setToZero={setToZero}
                            remove={remove}
                            edit={edit}
                            ingredient={ingredient}
                            items={items}
                        />
                        </dd>
                    )}
                </dl>
            </div>
        )
}

export default IngredientPerItemView