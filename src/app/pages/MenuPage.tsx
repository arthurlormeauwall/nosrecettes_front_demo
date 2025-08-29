
import { useState, useEffect } from "react";
import { useNavigate } from "react-router";
import { MenuRecipe } from "../models/MenuRecipe";
import { IMenuService, MenuService } from "../service/MenuService";
import { MenuView } from "../views/menu/MenuView";
import { MenuCommand } from "../components/menu/MenuRecipeItem";

const MenuPage = () => {
    const service: IMenuService = new MenuService();
    const navigate = useNavigate();
    const [menuRecipes, setMenuRecipes] = useState<MenuRecipe[]>([]);

    const fetchMenuRecipes = async () => {
        service.retrieveMenu()
            .then((data: MenuRecipe[]) => {
                const sortedRecipes = service.sortMenuRecipes(data);
                setMenuRecipes(sortedRecipes);
            });
    };

    useEffect(() => {
        fetchMenuRecipes();
    }, []);

    const removeRecipe = async (id: number) => {
        service.removeRecipeFromMenu([id]).then(() => {
            fetchMenuRecipes();
        });
    };

    const forceSync = (id: number) => {
        service.hardForceSync(id);
    };

    const editRecipe = (id: number) => {
        navigate(`/recipes/edit/${id}`);
    };

    const menuCommand: MenuCommand = {
        removeRecipe,
        forceSync,
        editRecipe
    };

    return (
        <MenuView
            menuRecipes={menuRecipes}
            menuCommand={menuCommand}
        />
    );
};

export default MenuPage;



