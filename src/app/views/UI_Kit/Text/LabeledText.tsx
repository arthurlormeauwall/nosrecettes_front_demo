import { ReactNode } from 'react';

type LabeledTextProps = {
    label: string;
    value: string | ReactNode;
    fallback?: string;
};

export const LabeledText = ({ label, value, fallback }: LabeledTextProps) => {
    const displayValue = value || fallback;
    
    return (
        <span className="labeled-text">
            <strong className="labeled-text__label">{label}:</strong> 
            <span className="labeled-text__value">{displayValue}</span>
        </span>
    );
};