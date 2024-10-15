import AddNewRecipe from '../../addRecipe/AddNewRecipe'
import SearchAndEditRecipe from '../../Recipe/SearchAndEditRecipe'

const addOrEditRecipePages = (client) => {
    return [
        {
            name: "Create new recipe",
            component: AddNewRecipe,
            propsToPass: {
                client: client
            }
        },
        {
            name: "Edit existing recipe",
            component: SearchAndEditRecipe,
            propsToPass: {
                client: client
            }
        }
    ]
}

export default addOrEditRecipePages