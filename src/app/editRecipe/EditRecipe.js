import { useState, useEffect } from "react"
import EditRecipeView from './views/EditRecipeView'

const EditRecipe = (props) => {
    const recipe = props.elements
    const callback = props.callback
    const items = props.propsToPass.items
    const client = props.propsToPass.client

    const [fullRecipe, setFullRecipe] = useState(undefined)
    useEffect(() => {
        client.retrieveARecipe(recipe.id)
            .then((data) => {
                setFullRecipe(data);
            });
    }, []);

    const addToMenu=(id)=>{
        client.addRecipeToMenu([id])
    }

    return <EditRecipeView
        recipe={recipe}
        callback={callback}
        items={items}
        client={client}
        fullRecipe={fullRecipe}
        addToMenu={addToMenu}
    />
}

export default EditRecipe