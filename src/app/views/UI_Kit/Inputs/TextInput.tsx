import { ChangeEvent } from 'react';

type TextInputProps = {
    value?: string;
    onChange: (e: ChangeEvent<HTMLInputElement>) => void;
    placeholder?: string;
    autoFocus?: boolean;
    name?: string;
    type?: 'text' | 'password' | 'email' | 'url';
    disabled?: boolean;
    required?: boolean;
};

export const TextInput = ({ 
    value, 
    onChange, 
    placeholder, 
    autoFocus = false,
    name,
    type = 'text',
    disabled = false,
    required = false
}: TextInputProps) => {
    return (
        <input
            type={type}
            value={value || ''}
            onChange={onChange}
            placeholder={placeholder}
            autoFocus={autoFocus}
            name={name}
            disabled={disabled}
            required={required}
            className="text-input"
        />
    );
};