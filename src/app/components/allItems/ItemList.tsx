import { Item } from "../../models/Item";
import { ItemListView } from "../../views/allItems/ItemListView";

type ItemListProps = {
    items: Item[];
    onItemUpdated: (item: Item) => void;
    allItems: Item[];
};

export const ItemList = ({ items, onItemUpdated, allItems }: ItemListProps) => {
    return (
        <ItemListView
            items={items}
            onItemUpdated={onItemUpdated}
            allItems={allItems}
        />
    );
};