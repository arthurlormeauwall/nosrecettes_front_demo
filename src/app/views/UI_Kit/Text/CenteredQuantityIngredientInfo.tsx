import { useEffect, useRef } from "react";

type CenteredQuantityIngredientInfoProps = {
    name: string;
    quantityType: string;
    quantity?: number;
};

export const CenteredQuantityIngredientInfo = ({ name, quantityType, quantity }: CenteredQuantityIngredientInfoProps) => {
    const containerRef = useRef<HTMLDivElement>(null);
    const displayQuantity = quantity !== undefined ? quantity : '';
    const displayUnit = quantityType ? quantityType.toLowerCase() : '';

    useEffect(() => {
        const updateQuantityPosition = () => {
            if (containerRef.current) {
                const container = containerRef.current;
                const quantityElement = container.querySelector('.ingredient-info__quantity-group') as HTMLElement;
                
                if (quantityElement) {
                    // Calculate center position relative to viewport
                    const viewportWidth = window.innerWidth;
                    const containerRect = container.getBoundingClientRect();
                    const actionsWidth = 200; // Approximate width of action buttons
                    const centerPosition = (viewportWidth - actionsWidth) / 2;
                    
                    // Set the quantity position
                    const containerLeft = containerRect.left;
                    const offsetFromLeft = centerPosition - containerLeft;
                    
                    quantityElement.style.position = 'absolute';
                    quantityElement.style.left = `${Math.max(0, offsetFromLeft)}px`;
                    quantityElement.style.transform = 'translateX(-50%)';
                }
            }
        };

        updateQuantityPosition();
        window.addEventListener('resize', updateQuantityPosition);
        
        return () => {
            window.removeEventListener('resize', updateQuantityPosition);
        };
    }, []);
    
    return (
        <div className="ingredient-info ingredient-info--centered" ref={containerRef}>
            <div className="ingredient-info__name">
                {name}
            </div>
            <div className="ingredient-info__unit">
                {displayUnit}
            </div>
            <div className="ingredient-info__quantity-group">
                <div className="ingredient-info__quantity">
                    {displayQuantity}
                </div>
                <div className="ingredient-info__unit-inline">
                    {displayUnit}
                </div>
            </div>
        </div>
    );
};