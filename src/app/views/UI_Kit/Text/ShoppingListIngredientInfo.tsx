type ShoppingListIngredientInfoProps = {
    name: string;
    quantityType: string;
    quantity?: number;
};

export const ShoppingListIngredientInfo = ({ name, quantityType, quantity }: ShoppingListIngredientInfoProps) => {
    const displayQuantity = quantity !== undefined ? quantity : '';
    const displayUnit = quantityType ? quantityType.toLowerCase() : '';
    
    return (
        <div className="ingredient-info">
            <div className="ingredient-info__name">
                {name}
            </div>
            <div className="ingredient-info__quantity-group">
                <div className="ingredient-info__quantity">
                    {displayQuantity}
                </div>
                <div className="ingredient-info__unit">
                    {displayUnit}
                </div>
            </div>
        </div>
    );
};