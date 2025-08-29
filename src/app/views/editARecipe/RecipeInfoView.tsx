import { Recipe } from "../../models/Recipe";
import { IRecipeService } from "../../service/RecipeService";
import { EditButton, ExternalLink } from "../UI_Kit";

type RecipeInfoViewProps = {
    recipe: Recipe;
    onEdit: () => void;
    recipeService: IRecipeService;
    showEditButton?: boolean;
};

export const RecipeInfoView = ({ recipe, onEdit, recipeService, showEditButton = true }: RecipeInfoViewProps) => {
    const renderSource = () => {
        if (recipeService.isALink(recipe)) {
            return (
                <ExternalLink href={recipeService.getSource(recipe)}>
                    {recipe.source}
                </ExternalLink>
            );
        } else if (recipe.source && recipe.source.trim() !== "") {
            return <span>{recipe.source}</span>;
        } else {
            return <span>No source</span>;
        }
    };

    return (
        <div className="recipe-info">
            <div className="recipe-info__content">
                <div className="recipe-info__item">
                    <div className="recipe-info__value recipe-info__name">
                        {recipe.name || "Unnamed recipe"}
                    </div>
                </div>
                <div className="recipe-info__item">
                    <div className="recipe-info__value recipe-info__source">
                        {renderSource()}
                    </div>
                </div>
                <div className="recipe-info__item">
                    <div className="recipe-info__value recipe-info__type">
                        {recipe.type || "No type"}
                    </div>
                </div>
            </div>
            {showEditButton && (
                <div className="recipe-info__edit-button">
                    <EditButton onClick={onEdit}>Edit Info</EditButton>
                </div>
            )}
        </div>
    );
};