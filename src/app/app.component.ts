import { Component, OnInit } from '@angular/core';
import { RecipeService } from './shared/services/recipe.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent implements OnInit {

  foodOfRecipesComp = 'food-of-recipes'
  foodsRecipeBookComp = 'foods-recipe-book'
  messagesComp = 'messages'

  constructor(private recipeService: RecipeService) { }

  ngOnInit(): void {

  }

  onSelect(event: string) {
    this.foodOfRecipesComp = event;
    this.foodsRecipeBookComp = event;
    this.messagesComp = event;
  }
}
