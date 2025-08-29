import { ChangeEvent } from 'react';

type NumberInputProps = {
    value?: number;
    onChange: (value: number) => void;
    placeholder?: string;
    autoFocus?: boolean;
    name?: string;
    disabled?: boolean;
    required?: boolean;
    min?: number;
    max?: number;
    step?: number;
};

export const NumberInput = ({ 
    value, 
    onChange, 
    placeholder, 
    autoFocus = false,
    name,
    disabled = false,
    required = false,
    min,
    max,
    step = 1
}: NumberInputProps) => {
    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        const numValue = parseFloat(e.target.value);
        if (!isNaN(numValue)) {
            onChange(numValue);
        }
    };

    return (
        <input
            type="number"
            value={value || ''}
            onChange={handleChange}
            placeholder={placeholder}
            autoFocus={autoFocus}
            name={name}
            disabled={disabled}
            required={required}
            min={min}
            max={max}
            step={step}
            className="number-input"
        />
    );
};