import { ReactNode } from 'react';

type ExternalLinkProps = {
    href: string;
    children: ReactNode;
    target?: string;
    rel?: string;
    className?: string;
};

export const ExternalLink = ({ 
    href, 
    children, 
    target = '_blank',
    rel = 'noopener noreferrer',
    className = ''
}: ExternalLinkProps) => {
    return (
        <a 
            href={href} 
            target={target} 
            rel={rel}
            className={`external-link ${className}`}
        >
            {children}
        </a>
    );
};