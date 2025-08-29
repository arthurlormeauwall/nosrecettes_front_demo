import { Recipe } from "../../models/Recipe";
import { IRecipeService } from "../../service/RecipeService";
import { ActionButton, EditButton } from "../UI_Kit";

type RecipeIngredientViewProps = {
    recipe: Recipe;
    onAddToMenu: () => void;
    onEdit: () => void;
    recipeService: IRecipeService;
};

export const RecipeIngredientView = ({ recipe, onAddToMenu, onEdit, recipeService }: RecipeIngredientViewProps) => {
    const renderCenterSource = () => {
        if (recipeService.isALink(recipe)) {
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
        if (recipeService.isALink(recipe)) {
            window.open(recipeService.getSource(recipe), '_blank', 'noopener,noreferrer');
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
                <EditButton onClick={onEdit}>edit</EditButton>
                <ActionButton onClick={onAddToMenu} variant="secondary">add</ActionButton>
            </div>
        </dt>
    );
};