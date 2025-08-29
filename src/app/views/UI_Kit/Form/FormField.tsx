import { ReactNode } from 'react';

type FormFieldProps = {
    label: string;
    children: ReactNode;
    required?: boolean;
    className?: string;
};

export const FormField = ({ label, children, required = false, className = '' }: FormFieldProps) => {
    return (
        <div className={`form-field ${className}`}>
            <label className="form-field__label">
                {label}
                {required && <span className="form-field__required">*</span>}:
            </label>
            <div className="form-field__input">
                {children}
            </div>
        </div>
    );
};