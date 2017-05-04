import { EventEmitter } from '@angular/core';
import { Recipe } from './recipe.model';
export class RecipeService {
    recipeSelected = new EventEmitter<Recipe>();
    private recipes: Recipe[] = [
        new Recipe("A Test Recipe1", 'This is simply a test1', 'http://www.seriouseats.com/images/2015/09/20150914-pressure-cooker-recipes-roundup-09.jpg'),
        new Recipe('A Test Recipe2', 'This is simply a test2', 'http://assets-jpcust.jwpsrv.com/thumbs/tjNwoclK-720.jpg')
    ];
    constructor() { }

    getRecipes() {
        return this.recipes.slice();
    }
}