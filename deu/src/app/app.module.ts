import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HttpClientModule } from "@angular/common/http";
import { RecipeService } from './shared/services/recipe.service';
import { HeaderComponent } from './header/header.component';
import { FoodOfRecipesComponent } from './food-of-recipes/food-of-recipes.component';
import { FoodsRecipeBookComponent } from './foods-recipe-book/foods-recipe-book.component';
import { MessagesComponent } from './messages/messages.component';
import { FoodOfRecipeListComponent } from './food-of-recipes/food-of-recipe-list/food-of-recipe-list.component';
import { FoodOfRecipeItemComponent } from './food-of-recipes/food-of-recipe-list/food-of-recipe-item/food-of-recipe-item.component';
import { FoodsRecipeBookListComponent } from './foods-recipe-book/foods-recipe-book-list/foods-recipe-book-list.component';
import { FoodsRecipeBookItemComponent } from './foods-recipe-book/foods-recipe-book-list/foods-recipe-book-item/foods-recipe-book-item.component';
import { MessageListComponent } from './messages/message-list/message-list.component';
import { MessageItemComponent } from './messages/message-list/message-item/message-item.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FoodOfRecipesComponent,
    FoodsRecipeBookComponent,
    MessagesComponent,
    FoodOfRecipeListComponent,
    FoodOfRecipeItemComponent,
    FoodsRecipeBookListComponent,
    FoodsRecipeBookItemComponent,
    MessageListComponent,
    MessageItemComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [
    RecipeService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
