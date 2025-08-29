import SearchWithRegexView from "../../views/SearchWithRegex/SearchWithRegexView"

export type ElementWithName = {
    name: string
}

type SearchWithRegexProps = {
    elementsToSearchIn: ElementWithName[],
    getMatchingElements: (e: ElementWithName[]) => void,
    autoFocus: boolean
    name?: string
    onInputChange?: (name: string) => void
    value?: string
}

const SearchWithRegex = ({
    elementsToSearchIn,
    getMatchingElements,
    autoFocus,
    onInputChange,
    name,
    value
}: SearchWithRegexProps) => {

    function allElementThatMatchInput(input: string): ElementWithName[] {
        var reg = new RegExp(input.split('').join('\\w*').replace(/\W/, ""), 'i');
        const elementWithoutUndefined = elementsToSearchIn.filter((element: ElementWithName) => { if (element.name) return element })
        if (input == '') {
            return elementWithoutUndefined
        }
        return elementWithoutUndefined.filter((element: ElementWithName) => {
            if (element.name.match(reg)) {
                return element;
            }
        });
    }

    function onChange(val: string) {
        getMatchingElements(allElementThatMatchInput(val))
        onInputChange?.(val)
    }

    return <SearchWithRegexView name={name} autoFocus={autoFocus} onChange={onChange} value={value} />
}

export default SearchWithRegex