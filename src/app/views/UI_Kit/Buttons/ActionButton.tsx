type ActionButtonProps = {
    onClick: () => void;
    children: string;
    variant?: 'primary' | 'secondary' | 'buy';
    disabled?: boolean;
};

export const ActionButton = ({ onClick, children, variant = 'primary', disabled = false }: ActionButtonProps) => {
    return (
        <button 
            onClick={onClick}
            disabled={disabled}
            className={`action-button action-button--${variant}`}
        >
            {children}
        </button>
    );
};