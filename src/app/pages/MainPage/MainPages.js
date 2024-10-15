import RecipeController from '../../Recipe/RecipesController.js';
import AddOrEditARecipe from '../addOrEditRecipePage/AddOrEditARecipe.js'
import AddOrEditAnItem from '../addOrEditItemPage/AddOrEditAnItem.js'
import MenuController from '../../Menu/MenuController.js'
import ShoppingListController from '../../ShoppingList/ShoppingListController.js';

const mainPages = (client) => {
    return [
        {
            name: "Recipes",
            order : 3,
            component: RecipeController,
            propsToPass: {
                client: client
            }
        },
        {
            name: "Menu",
            order : 2,
            component: MenuController,
            propsToPass: {
                client: client
            }
        },
        {
            name: "Shopping list",
            order : 0,
            component: ShoppingListController,
            propsToPass: {
                client: client,
            }
        },
        {
            name: "Add or edit item",
            order : 4,
            component: AddOrEditAnItem,
            propsToPass: {
                client: client,
            }
        }
    ]
}

export default mainPages