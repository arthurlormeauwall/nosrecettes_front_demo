type IngredientInfoProps = {
    name: string;
    quantityType: string;
    quantity?: number;
    separator?: string;
};

export const IngredientInfo = ({ name, quantityType, quantity, separator = ' / ' }: IngredientInfoProps) => {
    const parts = [name, quantityType];
    if (quantity !== undefined) {
        parts.push(quantity.toString());
    }
    
    return (
        <span className="ingredient-info">
            {parts.join(separator)}
        </span>
    );
};