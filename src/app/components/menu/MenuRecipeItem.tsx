import { MenuRecipe } from "../../models/MenuRecipe";
import { MenuRecipeItemView } from "../../views/menu/MenuRecipeItemView";

export type MenuCommand = {
    removeRecipe: (id: number) => void;
    forceSync: (id: number) => void;
    editRecipe: (id: number) => void;
};

type MenuRecipeItemProps = {
    recipe: MenuRecipe;
    menuCommand: MenuCommand;
};

export const MenuRecipeItem = ({ recipe, menuCommand }: MenuRecipeItemProps) => {
    return (
        <MenuRecipeItemView
            recipe={recipe}
            onForceSync={() => menuCommand.forceSync(recipe.id)}
            onRemove={() => menuCommand.removeRecipe(recipe.id)}
            onEdit={() => menuCommand.editRecipe(recipe.id)}
        />
    );
};