import EditRecipeForm from "../EditRecipeForm"
import LoadingComponent from "../../util/utilComponent/loadingComponent"

const EditRecipeView = (props) => {

    const recipe = props.recipe
    const callback = props.callback
    const items = props.items
    const client = props.client
    const fullRecipe = props.fullRecipe
    const addToMenu = props.addToMenu

    const getComponent = () => {
        return <EditRecipeForm addToMenu={addToMenu} fullRecipe={fullRecipe} recipe={recipe} elementEditedCallback={callback}
            items={items} client={client} />
    }

    return <LoadingComponent test={fullRecipe} component={getComponent} />
}

export default EditRecipeView