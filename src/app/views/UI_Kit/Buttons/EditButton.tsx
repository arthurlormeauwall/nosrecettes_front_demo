type EditButtonProps = {
    onClick: () => void;
    children: string;
    disabled?: boolean;
};

export const EditButton = ({ onClick, children, disabled = false }: EditButtonProps) => {
    return (
        <button 
            onClick={onClick}
            disabled={disabled}
            className="edit-button"
        >
            {children}
        </button>
    );
};