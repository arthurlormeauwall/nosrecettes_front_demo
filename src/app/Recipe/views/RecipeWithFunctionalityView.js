import RecipeView from "./RecipeView"
import AddRecipeButton from "../../addRecipe/views/AddRecipeButton"
import SearchWithRegex from "../../util/utilComponent/SearchWithRegex"
const RecipeWithFunctionality = (props) => {

    const getsource = props.propsToPass.source
    const add = props.propsToPass.add
    const recipes = props.elements
    const allRecipes=props.propsToPass.allRecipes
    const callback = props.callback
    const filterRecipes = props.propsToPass.filterRecipes

    const source = (recipe) => {
        if (recipe.source.includes("www") || recipe.source.includes("fr")
            || recipe.source.includes("fr")
            || recipe.source.includes("com")
            || recipe.source.includes("net")
            || recipe.source.includes("uk")
            || recipe.source.includes("us")
            || recipe.source.includes("/")
        ) {
            return (<a href={getsource(recipe)} target="_blank">Link</a>)
        } else if (recipe.source == " ") {
            return
        } else {
            return (<dl>source : {recipe.source}</dl>)
        }
    }
    const edit = (recipe) => {
        callback(recipe, "editRecipe")
    }

    const addRecipeCallback = () => {
        callback(null, "createRecipe")
    }

    const getRecipesWithFunc = () => (<div>

        <AddRecipeButton callback={addRecipeCallback} />
        <br/><br/>
        Search by name
        <SearchWithRegex
            autoFocus={true}
            elementsToSearchIn={allRecipes}
            onSubmit={filterRecipes}
            getMatchingElements={filterRecipes} />
        <div>
            <dl>
                {recipes.map(recipe => (
                    <dt>
                        <br/>
                        <button type="submit" onClick={() => add(recipe.id)}> add</button> ..
                        <button type="submit" onClick={() => edit(recipe)}> edit</button> .. 
                        {source(recipe)}
                        <RecipeView recipe={recipe} />
                    </dt>))
                }
            </dl>
        </div>
    </div>
    )

    return getRecipesWithFunc()
}

export default RecipeWithFunctionality