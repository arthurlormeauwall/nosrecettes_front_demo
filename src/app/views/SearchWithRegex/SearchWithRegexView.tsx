
import { useState, useEffect } from 'react';

type SearchWithRegexViewProps = {
    name?: string,
    autoFocus: boolean,
    onChange: (value: string) => void,
    value?: string,
}

const SearchWithRegexView = ({
    name,
    autoFocus,
    onChange,
    value,
}: SearchWithRegexViewProps) => {
    const [inputValue, setInputValue] = useState(value || "");

    useEffect(() => {
        setInputValue(value || "");
    }, [value]);

    const handleChange = (e: any) => {
        const newValue = e.target.value;
        setInputValue(newValue);
        onChange(newValue);
    };

    return <>
        <label>{name}</label>
        <br />
        <input
            autoFocus={autoFocus}
            type="text"
            value={inputValue}
            onChange={handleChange}>
        </input>
    </>
}

export default SearchWithRegexView