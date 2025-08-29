import { useState, useEffect } from "react";
import { IngredientFromShoppingList } from "../models/IngredientFromShoppingList";
import { IngredientType } from "../models/IngredientType";
import { listService } from "../service/listService";
import { IShoppingListService, ShoppingListService } from "../service/ShoppingListService";
import { ShoppingListView } from "../views/shoppingList/ShoppingListView";


const ShoppingList = () => {
        const service: IShoppingListService = new ShoppingListService()

        const [ingredients, setIngredients] = useState<IngredientFromShoppingList[]>([] as IngredientFromShoppingList[])

        const fetchIngredientsFromMenu = async () => {
                service.retrieveIngredientFromShoppingList()
                        .then((data: any) => setIngredients(data));
        }

        useEffect(() => {
                fetchIngredientsFromMenu();
        }, []);


        const handleRemove = (ingredient: IngredientFromShoppingList[]) => {
                if (ingredient.length == 0) {

                } else if (ingredient.length == 1) {
                        service.remove(ingredient[0]).then(() => {
                                const updatedIngredients = listService.remove(ingredient[0], ingredients)
                                // @ts-ignore
                                return setIngredients(updatedIngredients)
                        })
                } else {
                        let temp = service.remove(ingredient[0]).then(() => {
                                const updatedIngredients = listService.remove(ingredient[0], ingredients)
                                return updatedIngredients
                        })

                        for (let i = 1; i < ingredient.length - 1; i++) {
                                temp = temp.then((ings) => {
                                        return service.remove(ingredient[i]).then(() => {
                                                const updatedIngredients = listService.remove(ingredient[i], ings)
                                                return updatedIngredients
                                        }).then(ing => {
                                                return ing
                                        })
                                })
                        }

                        const lastIndex = ingredient.length - 1;
                        temp.then((ings) => {
                                service.remove(ingredient[lastIndex]).then(() => {
                                        const updatedIngredients = listService.remove(ingredient[lastIndex], ings)
                                        // @ts-ignore
                                        return setIngredients(updatedIngredients)
                                })
                        })
                }
        }


        const handleEdit = (ingredient: IngredientFromShoppingList) => {
                service.edit(ingredient).then((addedIngredient: IngredientFromShoppingList) => {
                        const updatedIngredients = listService.edit(addedIngredient, ingredients)
                        // @ts-ignore
                        return setIngredients(updatedIngredients)
                })
        }

        const handleAdd = (ingredient: IngredientType) => {
                const ingredientFromShoppingList: IngredientFromShoppingList = service.fromIngredient(ingredient)
                service.add(ingredientFromShoppingList).then((editedIngredient: IngredientFromShoppingList) => {
                        const updatedIngredients = listService.add(editedIngredient, ingredients)
                        // @ts-ignore
                        return setIngredients(updatedIngredients)
                })
        }

        const handleBuye = (ingredient: IngredientFromShoppingList) => {
                handleEdit({ ...ingredient, quantity: 0 })
        }

        return <ShoppingListView
                ingredients={ingredients}
                add={handleAdd}
                command={{ edited: handleEdit, remove: handleRemove, buye: handleBuye }}
        />
}

export default ShoppingList
