type SubmitButtonProps = {
    onClick: () => void;
    children: string;
    disabled?: boolean;
};

export const SubmitButton = ({ onClick, children, disabled = false }: SubmitButtonProps) => {
    return (
        <button 
            onClick={onClick}
            disabled={disabled}
            className="submit-button"
        >
            {children}
        </button>
    );
};