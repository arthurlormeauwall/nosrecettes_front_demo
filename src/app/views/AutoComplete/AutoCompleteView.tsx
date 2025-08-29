import SearchWithRegex, { ElementWithName } from "../../components/AutoCompleteSearch/SearchWithRegex"
import { CancelButton, ActionButton } from "../UI_Kit"

type AutocompleteViewProps = {
    elementsToSearchIn: ElementWithName[],
    selectedElements: ElementWithName[],
    onChange?: (name: string) => void
    onSelectionCallback: (input: ElementWithName) => void,
    setMatchingElements: (element: ElementWithName[]) => void,
    autoFocus: boolean
    cancel?: () => void
    value?: string
}

const AutoCompleteSearchView = ({
    onSelectionCallback,
    elementsToSearchIn,
    selectedElements,
    setMatchingElements,
    autoFocus,
    onChange,
    cancel,
    value,
}: AutocompleteViewProps) => {
    return (
        <div className="autocomplete-search-view">
            <div className="autocomplete-search-view__search">
                <SearchWithRegex
                    onInputChange={onChange}
                    autoFocus={autoFocus}
                    elementsToSearchIn={elementsToSearchIn}
                    getMatchingElements={setMatchingElements}
                    name={""}
                    value={value} />
            </div>
            
            {cancel && (
                <div className="autocomplete-search-view__cancel">
                    <CancelButton onClick={cancel}>Cancel</CancelButton>
                </div>
            )}
            
            <div className="autocomplete-search-view__results">
                {selectedElements.map((element: ElementWithName) => (
                    <div key={element.name} className="autocomplete-search-view__result-item">
                        <ActionButton 
                            onClick={() => onSelectionCallback(element)} 
                            variant="primary"
                        >
                            {element.name}
                        </ActionButton>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default AutoCompleteSearchView