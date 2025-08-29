
import { useState, useEffect } from "react";
import { useNavigate } from "react-router";
import { Recipe } from "../models/Recipe";
import { IRecipeService, RecipeService } from "../service/RecipeService";
import { RecipesView } from "../views/allRecipes/RecipesView";
import { ElementWithName } from "../components/AutoCompleteSearch/SearchWithRegex";

const RecipesPage = () => {
    const service: IRecipeService = new RecipeService();
    const navigate = useNavigate();
    const [recipes, setRecipes] = useState<Recipe[]>([]);
    const [selectedRecipes, setSelectedRecipes] = useState<Recipe[]>([]);

    const fetchRecipes = async () => {
        service.retrieveRecipes()
            .then((data: Recipe[]) => {
                const sortedRecipes = service.sortRecipes(data);
                setRecipes(sortedRecipes);
                setSelectedRecipes(sortedRecipes);
            });
    };

    useEffect(() => {
        fetchRecipes();
    }, []);

    const handleFilter = (allRecipes: ElementWithName[]) => {
        setSelectedRecipes(service.sortRecipes(allRecipes as Recipe[]));
    };

    const addRecipeToMenu = (id: number) => {
        service.addRecipeToMenu([id]);
    };

    const edit = (recipe: Recipe) => {
        navigate(`/recipes/edit/${recipe.id}`);
    };

    const handleAddRecipe = () => {
        navigate(`/recipes/edit/-1`);
    };

    return (
        <RecipesView
            handleAddRecipe={handleAddRecipe}
            addRecipeToMenu={addRecipeToMenu}
            recipes={recipes}
            selectedRecipes={selectedRecipes}
            onFilter={handleFilter}
            edit={edit}
            recipeService={service}
        />
    );
};

export default RecipesPage;