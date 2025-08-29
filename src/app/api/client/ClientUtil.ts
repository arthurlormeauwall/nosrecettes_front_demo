const baseUrl = 'https://nosrecettesdemodockerhub-lattest.onrender.com';

export const ClientUtil = {

    getFromApi(endpoint: unknown): Promise<any> {
        return fetch(baseUrl + endpoint)
            .then(response => {
                if (!response.ok) {
                    throw new Error('Network response error');
                }
                return response
            })
    },

    postToApi(endppoint: any, body: any): Promise<any> {
        return fetch(baseUrl + endppoint, {
            method: "POST",
            body: JSON.stringify(body),
            headers: {
                "Content-type": "application/json; charset=UTF-8"
            }
        }).then(response => {
                if (!response.ok) {
                    throw new Error('Network response error');
                }
                return response
            })
    },

    postToApiWithNoBody(endppoint: any): Promise<any> {
        return fetch(baseUrl + endppoint, {
            method: "POST",
        }).then(response => {
                if (!response.ok) {
                    throw new Error('Network response error');
                }
                return response
            })
    },

    getRequestParam(ids: any) {
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
}
