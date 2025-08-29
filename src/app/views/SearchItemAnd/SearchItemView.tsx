import { useState } from "react"
import AutoCompleteSearch from "../../components/AutoCompleteSearch/AutoCompleteSearch"
import { Item } from "../../models/Item"
import { ElementWithName } from "../../components/AutoCompleteSearch/SearchWithRegex"
import { ActionButton } from "../UI_Kit"

type SearchItemsOrCreateNewOneViewProps = {
    items: Item[]
    onSelection: (item: ElementWithName) => void
    cancel: () => void
    onCreateNewItem: () => void
    onChange?: (name: string) => void
}

export const SearchItemView = ({ items, onSelection, cancel, onCreateNewItem, onChange }: SearchItemsOrCreateNewOneViewProps) => {
    const [createButton, showCreateButton] = useState(false)

    const handleSshowCreateButton = (b: boolean) => {
        showCreateButton(b)
    }
    return (
        <div className="search-item-view">
            {createButton && (
                <div className="search-item-view__create-button">
                    <ActionButton onClick={() => { onCreateNewItem()}} variant="primary">
                        Create new item
                    </ActionButton>
                </div>
            )}
            <AutoCompleteSearch
                autoFocus={true}
                elements={items}
                key={items[0]?.id || 'fallback-key'}
                onSelectionCallback={onSelection}
                onChange={onChange}
                cancel={cancel}
                notFound={handleSshowCreateButton}
            />
        </div>
    )
}