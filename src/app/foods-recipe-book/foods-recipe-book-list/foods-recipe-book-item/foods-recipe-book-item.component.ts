import { Component, Input, OnInit } from '@angular/core';
import { Recipe } from "../../../shared/models/recipe";
import { RecipeService } from '../../../shared/services/recipe.service';

@Component({
  selector: 'app-foods-recipe-book-item',
  templateUrl: './foods-recipe-book-item.component.html',
  styleUrls: ['./foods-recipe-book-item.component.less']
})
export class FoodsRecipeBookItemComponent implements OnInit {

  public recipes: Array<Recipe>;
  public errorMsg: string;

  isFetching = false;
  loadedPost = false;

  constructor(private recipeService: RecipeService) { 
    this.recipes = [];
    this.errorMsg = '';
  }

  ngOnInit(): void {
    this.booleanPosts();
  }

  booleanPosts() {
    this.isFetching = true;
    const that = this;
    setTimeout(function() {
      that.isFetching = false;
    }, 4000);
    this.loadedPost = true;
    this.fetchPosts();
  }

  fetchPosts() {
    this.recipeService.getRecipes()
    .subscribe(
      data => {
        this.dataPostsIf(data);
      },
      error => {
        this.errorPostsIf(error);
      }
    );
  }

  dataPostsIf(data: any) {
    if (data.length) {
      this.isFetching = false;
      this.loadedPost = false;
    }
    this.recipes = data;
  }

  errorPostsIf(error: any) {
    if(error) {
      this.isFetching = false;
      this.loadedPost = false;
    }
    this.errorMsg = error.message;
  }

}
