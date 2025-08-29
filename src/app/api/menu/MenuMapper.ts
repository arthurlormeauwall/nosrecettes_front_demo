import { MenuRecipe } from "../../models/MenuRecipe";
import { RestMenuRecipe } from "../model/RestMenuRecipe";

export class MenuMapperService {
    toMenuRecipe(restMenuRecipe: RestMenuRecipe): MenuRecipe {
        return {
            id: restMenuRecipe.id,
            name: restMenuRecipe.name,
            source: restMenuRecipe.source,
            season: restMenuRecipe.season,
            type: restMenuRecipe.type
        };
    }

    toRestMenuRecipe(menuRecipe: MenuRecipe): RestMenuRecipe {
        return {
            id: menuRecipe.id,
            name: menuRecipe.name,
            source: menuRecipe.source,
            season: menuRecipe.season,
            type: menuRecipe.type
        };
    }
}