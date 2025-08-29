import { Item } from "../../models/Item";
import { InPlaceToggleEditandViewComponent } from "../../views/UI_Kit/Behavioral/EditableComponent/InPlaceToggleEditandViewComponent";
import { ItemView } from "../../views/allItems/ItemView";
import ItemCreationForm from "../item/ItemCreationForm";
import {FormProps} from "../../views/UI_Kit/Behavioral/EditableComponent/EditableComponent.ts";

type ItemComponentProps = {
    item: Item;
    onItemUpdated: (item: Item) => void;
    items: Item[];
};

export const ItemComponent = ({ item, onItemUpdated, items }: ItemComponentProps) => {
    return (
        <InPlaceToggleEditandViewComponent
            factory={{
                editing: false,
                viewComponent: ({ trigger }: { trigger: () => void }) =>
                    () => <ItemView 
                        item={item} 
                        onEdit={trigger}
                    />,
                editComponent: ({ onSubmit, cancel, data }: FormProps<Item>) =>
                    () => <ItemCreationForm
                        itemCreatedCallBack={onSubmit}
                        items={items}
                        cancel={cancel}
                        existingItem={data}
                    />
            }}
            formProps={{
                data: item,
                onSubmit: onItemUpdated,
            }}
        />
    );
};
