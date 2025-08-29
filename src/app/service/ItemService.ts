import { Item } from "../models/Item";
import { ElementWithName } from "../components/AutoCompleteSearch/SearchWithRegex";
import { ItemApiManager } from "../api/item/ItemApiManager";

export interface IItemService {
    retrieveItems(): Promise<Item[]>;
    updateItem(item: Item): Promise<Item>;
    itemDoesNotExist(item: any, items: any): boolean;
    itemNotEmpty(item: any): boolean;
    getItemTypes(items: Item[]): ElementWithName[];
}

export class ItemService implements IItemService {
    private apiManager = new ItemApiManager();

    static quantityTypePossibilities = [
        'GR', 'AMOUNT','ML' 
    ];

    retrieveItems(): Promise<Item[]> {
        return this.apiManager.retrieveItems();
    }

    updateItem(item: Item): Promise<Item> {
        return this.apiManager.updateItem(item);
    }

    itemDoesNotExist(item: any, items: any): boolean {
        return items
            .filter((it: any) => it.name == item.name)
            .filter((it: any) => it.quantityType == item.quantityType)
        [0]
    }

    itemNotEmpty(item: any): boolean {
        return item.name != "" && item.quantityType != ""
    }

    getItemTypes(items: Item[]): ElementWithName[] {
        const types: string[] = items.map((item: Item) => item.type);
        const uniqueTypes: string[] = Array.from(new Set(types));
        return uniqueTypes.map((type: string) => ({ name: type }));
    }
}