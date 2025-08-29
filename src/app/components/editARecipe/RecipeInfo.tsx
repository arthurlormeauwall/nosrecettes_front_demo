import { Recipe } from "../../models/Recipe";
import { InPlaceToggleEditandViewComponent } from "../../views/UI_Kit/Behavioral/EditableComponent/InPlaceToggleEditandViewComponent";
import { RecipeInfoView } from "../../views/editARecipe/RecipeInfoView";
import { RecipeInfoEdit } from "../../views/editARecipe/RecipeInfoEdit";
import { IRecipeService } from "../../service/RecipeService";
import {FormProps} from "../../views/UI_Kit/Behavioral/EditableComponent/EditableComponent.ts";

export type RecipeInfoCommand = {
    onUpdate: (recipe: Recipe) => void;
    onEdit?: () => void;
};

type RecipeInfoProps = {
    recipe: Recipe;
    command: RecipeInfoCommand;
    recipeService: IRecipeService;
};

export const RecipeInfo = ({ recipe, command, recipeService }: RecipeInfoProps) => {
    return (
        <InPlaceToggleEditandViewComponent
            factory={{
                editing: false,
                viewComponent: ({ trigger }: { trigger: () => void }) =>
                    () => <RecipeInfoView 
                        recipe={recipe} 
                        onEdit={trigger}
                        recipeService={recipeService}
                        showEditButton={true}
                    />,
                editComponent: ({ onSubmit, cancel, data }: FormProps<Recipe>) =>
                    () => <RecipeInfoEdit 
                        recipe={data!} 
                        onSubmit={onSubmit} 
                        onCancel={cancel!}
                    />
            }}
            formProps={{
                data: recipe,
                onSubmit: command.onUpdate,
            }}
        />
    );
};
