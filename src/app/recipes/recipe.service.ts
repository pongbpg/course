import { ShoppingListService } from './../shopping-list/shopping-list.service';
import { Ingredient } from './../shared/ingredient.model';
import { EventEmitter, Injectable } from '@angular/core';
import { Recipe } from './recipe.model';

@Injectable()
export class RecipeService {
    recipeSelected = new EventEmitter<Recipe>();
    private recipes: Recipe[] = [
        new Recipe(
            'Stir-Fried Pork & Basil',
            'Rice topped with stir-fried pork and basil', 'http://ja.files-media.com/image/1/10/img_13674_tmp_BztTu_600x600.jpg',
            [
                new Ingredient('Stir-Fried Pork', 5),
                new Ingredient('Basil', 2)
            ]),
        new Recipe(
            'Papaya Salad',
            'Papaya salad (Som tum)',
            'https://img.kapook.com/u/patcharin/Food/Thai%20food/somta1.jpg',
            [
                new Ingredient('Green Papaya', 2),
                new Ingredient('Carrot', 1),
                new Ingredient('Bean', 0.5)
            ])
    ];
    constructor(private slService: ShoppingListService) { }

    getRecipes() {
        return this.recipes.slice();
    }

    addIngredientsToShoppingList(ingredients: Ingredient[]) {
        this.slService.addIngredients(ingredients);
    }
}