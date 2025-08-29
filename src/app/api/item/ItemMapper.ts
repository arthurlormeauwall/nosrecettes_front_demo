import { Item } from "../../models/Item";
import { RestItem } from "../model/RestItem";

export class ItemMapperService {

  constructor() { }

  toItem(restItem: RestItem) : Item{
    return {
      ...restItem
    } as Item
  }

  toRestItem(item: Item) : RestItem{
    return {
      ...item
    } as RestItem
  }
}
