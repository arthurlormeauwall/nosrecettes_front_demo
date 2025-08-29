type RemoveButtonProps = {
    onClick: () => void;
    children: string;
    disabled?: boolean;
};

export const RemoveButton = ({ onClick, children, disabled = false }: RemoveButtonProps) => {
    return (
        <button 
            onClick={onClick}
            disabled={disabled}
            className="remove-button"
        >
            {children}
        </button>
    );
};