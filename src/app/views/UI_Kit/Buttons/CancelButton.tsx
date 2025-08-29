type CancelButtonProps = {
    onClick: () => void;
    children: string;
    disabled?: boolean;
};

export const CancelButton = ({ onClick, children, disabled = false }: CancelButtonProps) => {
    return (
        <button 
            onClick={onClick}
            disabled={disabled}
            className="cancel-button"
        >
            {children}
        </button>
    );
};