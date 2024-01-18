import { Component, OnInit } from '@angular/core';
import { RecipeService } from './shared/services/recipe.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent implements OnInit {

  foodOfRecipesDeComp = 'food-of-recipes-de'
  foodsRecipeBookDeComp = 'foods-recipe-book-de'
  messagesDeComp = 'messages-de'

  constructor(private recipeService: RecipeService) { }

  ngOnInit(): void {

  }

  onSelect(event: string) {
    this.foodOfRecipesDeComp = event;
    this.foodsRecipeBookDeComp = event;
    this.messagesDeComp = event;
  }
}
