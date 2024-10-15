const baseUrl = 'https://nosrecettesdemodockerhub-lattest.onrender.com';

const NosRecettesClient = {
    updateRecipeAndForceSync: (recipe, idsOfIngredientToRemove) => {
        return postToApi('/recipe', recipe)
            .then(() => {
                postToApiWithNoBody('/menu/forcesync' + getRequestParam(idsOfIngredientToRemove))
            })
    },

    addRecipeToMenuUpdateAndForceSync: (recipe, id) => {
        return postToApiWithNoBody('/menu' + getRequestParam([id]))
            .then(() =>
                postToApi('/recipe', recipe)
                    .then(() => {
                        postToApiWithNoBody('/menu/forcesync' + getRequestParam(id))
                    })
                )
    },

    retrieveMenu: () => {
        return getFromApi('/menu')
    },
    retrieveRecipes: () => {
        return getFromApi('/recipe')
    },
    retrieveARecipe: (id) => {
        return getFromApi('/recipe/' + id)
    },
    retrieveItems: () => {
        return getFromApi('/item')
    },
    retrieveIngredientFromMenu: () => {
        return getFromApi('/shoppinglist/frommenu')
    },

    retrieveIngredientFromShoppingList: () => {
        return getFromApi('/shoppinglist')
    },
    updateItem: (item) => {
        return postToApi('/item', item)
    },

    updateRecipe: (recipe) => {
        return postToApi('/recipe', recipe)
    },

    updateIngredientFromShoppingList: (ingredient) => {
        return postToApi('/shoppinglist', ingredient)
    },

    updateIngredientFromMenu: (ingredient) => {
        return postToApi('/shoppinglist/frommenu', ingredient)
    },

    addRecipeToMenu: (idsOfRecipeToAdd) => {
        return postToApiWithNoBody('/menu' + getRequestParam(idsOfRecipeToAdd))
    },

    removeRecipeFromMenu: (idsOfRecipeToRemove) => {
        return postToApiWithNoBody('/menu/remove' + getRequestParam(idsOfRecipeToRemove))
    },
    removeIngredientFromShoppingList: (idsOfIngredientToRemove) => {
        return postToApiWithNoBody('/shoppinglist/delete' + getRequestParam(idsOfIngredientToRemove))
    },
    removeIngredientFromMenu: (idsOfIngredientToRemove) => {
        return postToApiWithNoBody('/shoppinglist/frommenu/delete' + getRequestParam(idsOfIngredientToRemove))
    },
    forceSync: (idsOfIngredientToRemove) => {
        return postToApiWithNoBody('/menu/forcesync' + getRequestParam(idsOfIngredientToRemove))
    },
    hardForceSync: (idsOfIngredientToRemove) => {
        return postToApiWithNoBody('/menu/hardforcesync' + getRequestParam(idsOfIngredientToRemove))
    }
}

export default NosRecettesClient


function getFromApi(endpoint) {
    return fetch(baseUrl + endpoint)
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response error');
            }
            return response.json();
        })
        .catch(error => {
            console.error('Fetch error:', error);
        });
}

function postToApi(endppoint, body) {
    return fetch(baseUrl + endppoint, {
        method: "POST",
        body: JSON.stringify(body),
        headers: {
            "Content-type": "application/json; charset=UTF-8"
        }
    }).catch(error => {
        console.error('Fetch error:', error);
    });;
}


function postToApiWithNoBody(endppoint) {
    return fetch(baseUrl + endppoint, {
        method: "POST",
    }).catch(error => {
        console.error('Fetch error:', error);
    });;
}

function getRequestParam(ids) {
    if (Array.isArray(ids)) {
        let response = "?ids=" + ids[0]
        if (ids.length > 1) {
            for (let i = 1; i < ids.length; i++) {
                response = response + "&ids=" + ids[i]
            }
        }
        return response
    }
    return "?id=" + ids;
}

