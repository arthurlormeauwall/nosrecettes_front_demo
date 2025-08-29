import { ReactNode } from 'react';

type ButtonGroupProps = {
    children: ReactNode;
    className?: string;
    alignment?: 'left' | 'center' | 'right';
};

export const ButtonGroup = ({ children, className = '', alignment = 'left' }: ButtonGroupProps) => {
    return (
        <div className={`button-group button-group--${alignment} ${className}`}>
            {children}
        </div>
    );
};