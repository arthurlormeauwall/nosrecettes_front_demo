import { Item } from "../../models/Item";
import { RestItem } from "../model/RestItem";
import { ItemApiClient } from "./ItemApiClient";
import { ItemMapperService } from "./ItemMapper";

export class ItemApiManager {
    client = new ItemApiClient()
    mapper = new ItemMapperService()

    retrieveItems () : Promise<Item[]> {
        return this.client.retrieveItems().then((itemData: RestItem[])=>itemData.map((item: RestItem) => this.mapper.toItem(item)));
    }

    updateItem(item: Item) : Promise<Item>{
        return this.client.updateItem(this.mapper.toRestItem(item)).then((restItem : RestItem)=>this.mapper.toItem(restItem));
    }
}