import { useState, useEffect } from "react";
import { Item } from "../models/Item";
import { IItemService, ItemService } from "../service/ItemService";
import { ItemsView } from "../views/allItems/ItemsView";
import { ElementWithName } from "../components/AutoCompleteSearch/SearchWithRegex";

const ItemPage = () => {
    const itemService: IItemService = new ItemService();
    const [items, setItems] = useState<Item[]>([]);
    const [selectedItems, setSelectedItems] = useState<Item[]>([]);

    const fetchItems = async () => {
        itemService.retrieveItems()
            .then((data: Item[]) => {
                const sortedItems = sortItems(data);
                setItems(sortedItems);
                setSelectedItems(sortedItems);
            });
    };

    const sortItems = (items: Item[]): Item[] => {
        return items.sort((a, b) => {
            const nameA = a.name.toUpperCase();
            const nameB = b.name.toUpperCase();
            if (nameA < nameB) {
                return -1;
            }
            if (nameA > nameB) {
                return 1;
            }
            return 0;
        });
    };

    useEffect(() => {
        fetchItems();
    }, []);

    const handleFilter = (allItems: ElementWithName[]) => {
        setSelectedItems(sortItems(allItems as Item[]));
    };

    const handleItemCreated = async (item: Item) => {
        try {
            await itemService.updateItem(item);
            fetchItems(); // Refresh the list after creation
        } catch (error) {
            console.error("Error creating item:", error);
        }
    };

    const handleItemUpdated = async (item: Item) => {
        try {
            await itemService.updateItem(item);
            fetchItems(); // Refresh the list after update
        } catch (error) {
            console.error("Error updating item:", error);
        }
    };

    return (
        <ItemsView
            items={items}
            selectedItems={selectedItems}
            onFilter={handleFilter}
            onItemCreated={handleItemCreated}
            onItemUpdated={handleItemUpdated}
        />
    );
};

export default ItemPage;