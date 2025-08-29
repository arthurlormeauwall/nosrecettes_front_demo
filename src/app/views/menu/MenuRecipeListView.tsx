import { MenuRecipe } from "../../models/MenuRecipe";
import { MenuRecipeList } from "../../components/menu/MenuRecipeList";
import { MenuCommand } from "../../components/menu/MenuRecipeItem";

type MenuRecipeListViewProps = {
    menuRecipes: MenuRecipe[];
    menuCommand: MenuCommand;
};

export const MenuRecipeListView = ({ menuRecipes, menuCommand }: MenuRecipeListViewProps) => {
    if (menuRecipes.length === 0) {
        return (
            <div className="recipes-empty">
                <div className="recipes-empty__title">No recipes in menu</div>
                <div className="recipes-empty__description">Add some recipes to get started</div>
            </div>
        );
    }

    return (
        <div className="recipe-list">
            <dl>
                <MenuRecipeList
                    menuRecipes={menuRecipes}
                    menuCommand={menuCommand}
                />
            </dl>
        </div>
    );
};