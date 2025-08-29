import { Recipe } from "../../models/Recipe";
import { RecipeIngredient } from "../../components/allRecipes/RecipeIngredient";
import { IRecipeService, RecipePerType } from "../../service/RecipeService";

type RecipeListViewProps = {
    recipesGroupedByType: RecipePerType;
    addToMenu: (id: number) => void;
    edit: (recipe: Recipe) => void;
    recipeService: IRecipeService;
};

export const RecipeListView = ({ recipesGroupedByType, addToMenu, edit, recipeService }: RecipeListViewProps) => {
    const sortedTypes = recipeService.sortTypes(Object.keys(recipesGroupedByType));
    
    return (
        <div className="recipe-list">
            <dl>
                {sortedTypes.map((type, index) => (
                    <div key={index} className="recipe-list__type-group">
                        <div className="recipe-list__type-title">{type}</div>
                        <div className="recipe-list__type-recipes">
                            {recipesGroupedByType[type].map((recipe: Recipe) => (
                                <RecipeIngredient
                                    key={recipe.id}
                                    recipe={recipe}
                                    addToMenu={addToMenu}
                                    edit={edit}
                                    recipeService={recipeService}
                                />
                            ))}
                        </div>
                    </div>
                ))}
            </dl>
        </div>
    );
};