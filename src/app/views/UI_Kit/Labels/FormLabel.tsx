type FormLabelProps = {
    children: string;
    htmlFor?: string;
    required?: boolean;
};

export const FormLabel = ({ children, htmlFor, required = false }: FormLabelProps) => {
    return (
        <label htmlFor={htmlFor} className="form-label">
            {children}
            {required && <span className="form-label__required">*</span>}
        </label>
    );
};