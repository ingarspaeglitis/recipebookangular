import { EventEmitter, Injectable } from '@angular/core';

import { Recipe } from './recipe.model';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';

@Injectable()
export class RecipeService {

    public recipeSelected = new EventEmitter<Recipe>();

    private recipes: Recipe[] = [
        new Recipe(
        'Tasty Schnizel',
        'just awesome',
        'https://scm-assets.constant.co/scm/unilever/1d398653b55393fd6da9bff8ea193338/bf20475f-50ee-4791-a5d8-34cac7dbd372.jpg',
        [
          new Ingredient('Meat', 1),
          new Ingredient('French Fries', 20)
        ]),

        new Recipe(
          'Big Fat Burger',
          'What else you need to say',
          'https://scm-assets.constant.co/scm/unilever/1d398653b55393fd6da9bff8ea193338/bf20475f-50ee-4791-a5d8-34cac7dbd372.jpg',
          [new Ingredient('Buns', 2),
          new Ingredient('Meat', 1)
          ])

      ];

      constructor(private shoppinglistService: ShoppingListService) {}

      getRecipes() {

        return this.recipes.slice();
      }

      addIngredientsToShoppingList(ingredients: Ingredient[]) {

        this.shoppinglistService.addIngredients(ingredients);
      }
}
