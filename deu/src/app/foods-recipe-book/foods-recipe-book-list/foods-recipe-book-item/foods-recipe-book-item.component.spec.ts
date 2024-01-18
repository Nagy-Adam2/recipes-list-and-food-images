import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FoodsRecipeBookItemComponent } from './foods-recipe-book-item.component';

describe('FoodsRecipeBookItemComponent', () => {
  let component: FoodsRecipeBookItemComponent;
  let fixture: ComponentFixture<FoodsRecipeBookItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FoodsRecipeBookItemComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FoodsRecipeBookItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
