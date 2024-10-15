import React from 'react';


const IngredientView = (props) => {
    const ingredient = props.elements
    const items = props.propsToPass.items
    const item = items.filter(it => it.id == ingredient.itemId)[0]
    const remove=props.propsToPass.remove
    const callback=props.callback
    
    const onClick = (ingredient)=>{
        callback(ingredient, "editIngredient")
    }

    return (
        <div>
            <button onClick={() => remove(ingredient)}>remove</button>
            <button onClick={() => onClick(ingredient)}>edit</button>
            <div id='IngredientFromMenuDiv'>
                <dl>
                    <dt key={ingredient.name}>{item.name} / {item.quantityType} / {ingredient.quantity}</dt>
                </dl>
            </div>
            <br />
        </div>


    )
}

export default IngredientView