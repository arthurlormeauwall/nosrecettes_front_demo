import { MenuRecipe } from "../../models/MenuRecipe";
import { MenuRecipeListView } from "./MenuRecipeListView";
import { MenuCommand } from "../../components/menu/MenuRecipeItem";

type MenuViewProps = {
    menuRecipes: MenuRecipe[];
    menuCommand: MenuCommand;
};

export const MenuView = ({ menuRecipes, menuCommand }: MenuViewProps) => {
    return (
        <div className="recipes-list">
            <div className="recipes-list__header">
                <h1>Menu</h1>
            </div>
            <MenuRecipeListView
                menuRecipes={menuRecipes}
                menuCommand={menuCommand}
            />
        </div>
    );
};