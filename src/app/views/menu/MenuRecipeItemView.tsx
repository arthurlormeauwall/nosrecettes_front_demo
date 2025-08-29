import { MenuRecipe } from "../../models/MenuRecipe";
import { ActionButton, EditButton, RemoveButton } from "../UI_Kit";
import { RecipeService } from "../../service/RecipeService";
import { Recipe } from "../../models/Recipe";

type MenuRecipeItemViewProps = {
    recipe: MenuRecipe;
    onForceSync: () => void;
    onRemove: () => void;
    onEdit: () => void;
};

export const MenuRecipeItemView = ({ recipe, onForceSync, onRemove, onEdit }: MenuRecipeItemViewProps) => {
    const recipeService = new RecipeService();
    
    const renderCenterSource = () => {
        if (recipeService.isALink(recipe as Recipe)) {
            return (
                <ActionButton onClick={handleOpenLink} variant="primary">
                    link
                </ActionButton>
            );
        } else if (recipe.source && recipe.source.trim() !== "" && recipe.source !== " ") {
            return <span className="recipe-source-text">{recipe.source}</span>;
        } else {
            return <span className="recipe-source-text">No source</span>;
        }
    };

    const renderType = () => {
        if (recipe.type && recipe.type.trim() !== "") {
            return <span className="type-badge">{recipe.type}</span>;
        } else {
            return <span className="type-badge type-badge--empty">No type</span>;
        }
    };

    const handleOpenLink = () => {
        if (recipeService.isALink(recipe as Recipe)) {
            window.open(recipeService.getSource(recipe as Recipe), '_blank', 'noopener,noreferrer');
        }
    };

    return (
        <dt key={recipe.id} className="recipe-item">
            <div className="recipe-item__info">
                <div className="recipe-name">{recipe.name}</div>
                <div className="recipe-type">
                    {renderType()}
                </div>
            </div>
            <div className="recipe-item__center">
                {renderCenterSource()}
            </div>
            <div className="recipe-item__actions">
                <ActionButton onClick={onForceSync} variant="secondary">sync</ActionButton>
                <EditButton onClick={onEdit}>edit</EditButton>
                <RemoveButton onClick={onRemove}>remove</RemoveButton>
            </div>
        </dt>
    );
};