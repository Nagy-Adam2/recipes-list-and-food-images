import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FoodsRecipeBookListComponent } from './foods-recipe-book-list.component';

describe('FoodsRecipeBookListComponent', () => {
  let component: FoodsRecipeBookListComponent;
  let fixture: ComponentFixture<FoodsRecipeBookListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FoodsRecipeBookListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FoodsRecipeBookListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
