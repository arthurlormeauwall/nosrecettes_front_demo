import { Item } from "../../models/Item";
import { LabeledText, EditButton } from "../UI_Kit";

type ItemViewProps = {
    item: Item;
    onEdit: () => void;
};

export const ItemView = ({ item, onEdit }: ItemViewProps) => {
    return (
        <div className="item-card">
            <div className="item-card__header">
                <h3 className="item-name">{item.name}</h3>
            </div>
            <div className="item-card__body">
                <div className="item-card__info">
                    <LabeledText label="Type" value={item.type} fallback="No type" />
                    <LabeledText label="Quantity Type" value={item.quantityType} />
                </div>
                <div className="item-card__actions">
                    <EditButton onClick={onEdit}>Edit</EditButton>
                </div>
            </div>
        </div>
    );
};