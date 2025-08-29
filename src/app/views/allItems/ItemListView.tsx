import { Item } from "../../models/Item";
import { ItemComponent } from "../../components/allItems/ItemComponent";

type ItemListViewProps = {
    items: Item[];
    onItemUpdated: (item: Item) => void;
    allItems: Item[];
};

export const ItemListView = ({ items, onItemUpdated, allItems }: ItemListViewProps) => {
    return (
        <div className="items-list__grid">
            {items.map((item: Item) => (
                <ItemComponent
                    key={item.id}
                    item={item}
                    onItemUpdated={onItemUpdated}
                    items={allItems}
                />
            ))}
        </div>
    );
};