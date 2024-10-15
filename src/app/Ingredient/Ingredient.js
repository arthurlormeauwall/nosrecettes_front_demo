import IngredientView from './views/IngredientView'
import EditIngredientAdapter from './EditIngredientAdapter'
import ChainActionBuilder from '../util/behavioralComponent/ChainActionBuilder'

const Ingredient = (props) => {

    const ingredient = props.ingredient
    const items = props.items
    const editCallback = props.edit
    const remove=props.remove

    const getItem = () => {
        return items.filter(it => it.id == ingredient.itemId)[0]
    }

    return (<ChainActionBuilder
        inputs={ingredient}
        onSubmit={editCallback}
        firstComponent={IngredientView}
        secondcomponents={{"editIngredient":()=>EditIngredientAdapter}}
        propsToPassToFirstComponent={{ items: items, remove:remove }}
        propsToPassToSecondComponent={{ ingredient: ingredient, item: getItem() }}
    />)
}
export default Ingredient



