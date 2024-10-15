import ListOfIngredientsOfRecipeView from './ListOfIngredientsOfRecipeView'
import IngredientListView from "../../ingredientList/IngredientListView"

const EditRecipeFormView = (props) => {

    const updateCallback = props.updateCallback
    const addIngredient = props.addIngredient
    const items = props.items
    const formData = props.formData
    const ingredients=props.ingredients
    const edit= props.edit
    const remove = props.remove
    const handleInputChange=props.handleInputChange

    const getIngredientListComponent = () => {
        return (<ListOfIngredientsOfRecipeView
            ingredients={ingredients}
            edit={edit}
            remove={remove}
            items={items}
        />)
    }

    return (<div>
            <p><button onClick={() => updateCallback()}>CANCEL </button></p>
              <p><button onClick={() => updateCallback({typeOfAction:"add", data:formData})}>ADD to menu </button></p>
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
            <label>Source:</label>
            <input
                type="text"
                name="source"
                value={formData.source}
                onChange={(value) => handleInputChange(value.target)}
            />
        </div>

        <div>
            <label>type:</label>
            <input
                type="text"
                name="type"
                value={formData.type}
                onChange={(value) => handleInputChange(value.target)}
            />
        </div>


        <div id='IngredientListDiv'>
            <p>.....................<button onClick={() => updateCallback(formData)}>Update</button></p>

            <IngredientListView
                ingredientListComponent={getIngredientListComponent}
                items={items}
                addIngredientCallback={addIngredient}
            />
        </div>


        <div>
            <button onClick={() => updateCallback(formData)}>Update</button>
        </div>
    </div>)
}
export default EditRecipeFormView