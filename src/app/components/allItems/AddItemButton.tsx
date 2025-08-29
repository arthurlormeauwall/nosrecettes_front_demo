import { useState } from "react";
import { Item } from "../../models/Item";
import ItemCreationForm from "../item/ItemCreationForm";
import { ActionButton } from "../../views/UI_Kit";

type AddItemButtonProps = {
    onItemCreated: (item: Item) => void;
    items: Item[];
};

export const AddItemButton = ({ onItemCreated, items }: AddItemButtonProps) => {
    const [showForm, setShowForm] = useState(false);

    const handleItemCreated = (item: Item) => {
        onItemCreated(item);
        setShowForm(false);
    };

    const handleCancel = () => {
        setShowForm(false);
    };

    if (showForm) {
        return (
            <div className="add-item-form">
                <ItemCreationForm
                    itemCreatedCallBack={handleItemCreated}
                    items={items}
                    cancel={handleCancel}
                />
            </div>
        );
    }

    return (
        <ActionButton onClick={() => setShowForm(true)} variant="primary">
            Add Item
        </ActionButton>
    );
};