import { ChangeEvent } from 'react';

type SelectInputProps = {
    value?: string;
    onChange: (e: ChangeEvent<HTMLSelectElement>) => void;
    options: string[];
    placeholder?: string;
    name?: string;
    id?: string;
    disabled?: boolean;
    required?: boolean;
};

export const SelectInput = ({ 
    value, 
    onChange, 
    options,
    placeholder,
    name,
    id,
    disabled = false,
    required = false
}: SelectInputProps) => {
    return (
        <select
            id={id}
            name={name}
            value={value || ''}
            onChange={onChange}
            disabled={disabled}
            required={required}
            className="select-input"
        >
            {placeholder && <option value="">{placeholder}</option>}
            {options.map((option) => (
                <option key={option} value={option}>
                    {option}
                </option>
            ))}
        </select>
    );
};