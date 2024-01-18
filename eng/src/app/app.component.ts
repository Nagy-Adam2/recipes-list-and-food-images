import { Component, OnInit } from '@angular/core';
import { RecipeService } from './shared/services/recipe.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent implements OnInit {
  title = 'recipes-list-and-image-map';

  foodOfRecipesEnComp = 'food-of-recipes-en'
  foodsRecipeBookEnComp = 'foods-recipe-book-en'
  messagesEnComp = 'messages-en'

  constructor(private recipeService: RecipeService) { }

  ngOnInit(): void {

  }

  onSelect(event: string) {
    this.foodOfRecipesEnComp = event;
    this.foodsRecipeBookEnComp = event;
    this.messagesEnComp = event;
  }
}
