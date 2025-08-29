import { ClientUtil } from "../client/ClientUtil"
import { RestItem } from "../model/RestItem"

export class ItemApiClient {
    clientUtil = ClientUtil

    retrieveItems(): Promise<RestItem[]> {
        return this.clientUtil.getFromApi('/item').then(response=>response.json())
    }

    updateItem(item: RestItem): Promise<RestItem> {
        return this.clientUtil.postToApi('/item', item).then(response=>response.json())
    }
}