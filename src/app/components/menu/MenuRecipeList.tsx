import { MenuRecipe } from "../../models/MenuRecipe";
import { MenuRecipeItem, MenuCommand } from "./MenuRecipeItem";

type MenuRecipeListProps = {
    menuRecipes: MenuRecipe[];
    menuCommand: MenuCommand;
};

export const MenuRecipeList = ({ menuRecipes, menuCommand }: MenuRecipeListProps) => {
    return (
        <>
            {menuRecipes.map((recipe: MenuRecipe) => (
                <MenuRecipeItem
                    key={recipe.id}
                    recipe={recipe}
                    menuCommand={menuCommand}
                />
            ))}
        </>
    );
};