import { Item } from "../../models/Item";
import { AddItemButton } from "../../components/allItems/AddItemButton";
import { ItemList } from "../../components/allItems/ItemList";
import SearchWithRegex, { ElementWithName } from "../../components/AutoCompleteSearch/SearchWithRegex";

type ItemsViewProps = {
    items: Item[];
    selectedItems: Item[];
    onFilter: (allItems: ElementWithName[]) => void;
    onItemCreated: (item: Item) => void;
    onItemUpdated: (item: Item) => void;
};

export const ItemsView = ({ items, selectedItems, onFilter, onItemCreated, onItemUpdated }: ItemsViewProps) => {
    return (
        <div className="items-list">
            <div className="items-list__header">
                <h1>Items</h1>
            </div>
            
            <div className="items-list__search">
                <SearchWithRegex
                    elementsToSearchIn={items}
                    getMatchingElements={onFilter}
                    autoFocus={true}
                />
            </div>
            
            <div className="items-list__add-item">
                <AddItemButton onItemCreated={onItemCreated} items={items} />
            </div>
            
            {selectedItems.length > 0 ? (
                <ItemList
                    items={selectedItems}
                    onItemUpdated={onItemUpdated}
                    allItems={items}
                />
            ) : (
                <div className="items-empty">
                    <div className="items-empty__icon">📦</div>
                    <h2 className="items-empty__title">No items found</h2>
                    <p className="items-empty__description">
                        Try adjusting your search or create a new item.
                    </p>
                </div>
            )}
        </div>
    );
};