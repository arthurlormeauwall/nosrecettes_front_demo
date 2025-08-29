import { useParams, useNavigate } from "react-router";
import { useState, useEffect } from "react";
import { Recipe } from "../../models/Recipe";
import { IRecipeService, RecipeService } from "../../service/RecipeService";
import { EditRecipeForm, EditRecipeCommand } from "./EditRecipeForm";
import { CreateRecipeForm, CreateRecipeCommand } from "./CreateRecipeForm";

export const EditRecipe = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const service: IRecipeService = new RecipeService();
    const [recipe, setRecipe] = useState<Recipe | null>(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchRecipe = async () => {
            try {
                if (id === "-1") {
                    // Nouvelle recette
                    setRecipe(service.createEmptyRecipe());
                } else if (id) {
                    // Recette existante
                    const fetchedRecipe = await service.retrieveRecipe(Number(id));
                    setRecipe(fetchedRecipe);
                }
            } catch (error) {
                console.error("Error fetching recipe:", error);
                // En cas d'erreur, créer une recette vide
                setRecipe(service.createEmptyRecipe());
            } finally {
                setLoading(false);
            }
        };

        fetchRecipe();
    }, [id]);

    const updateRecipe = async (recipe: Recipe) => {
        try {
            await service.updateRecipeAndForceSync(recipe);
            navigate('/recipes');
        } catch (error) {
            console.error("Error updating recipe:", error);
        }
    };

    const createRecipe = async (recipe: Recipe) => {
        try {
            await service.createRecipe(recipe);
            navigate('/recipes');
        } catch (error) {
            console.error("Error creating recipe:", error);
        }
    };

    const addToMenu = async (recipe: Recipe) => {
        if (recipe.id) {
            try {
                await service.addRecipeToMenu([recipe.id]);
            } catch (error) {
                console.error("Error adding recipe to menu:", error);
            }
        }
    };

    const goBack = () => {
        navigate(-1);
    };

    const editCommand: EditRecipeCommand = {
        updateRecipe,
        addToMenu,
        goBack
    };

    const createCommand: CreateRecipeCommand = {
        createRecipe,
        goBack
    };

    if (loading) {
        return <div>Loading...</div>;
    }

    if (!recipe) {
        return <div>Recipe not found</div>;
    }

    if (id === "-1") {
        return (
            <CreateRecipeForm
                emptyRecipe={recipe}
                command={createCommand}
            />
        );
    }

    return (
        <EditRecipeForm
            fullRecipe={recipe}
            command={editCommand}
        />
    );
};