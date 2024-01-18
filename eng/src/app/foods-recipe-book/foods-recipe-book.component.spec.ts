import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FoodsRecipeBookComponent } from './foods-recipe-book.component';

describe('FoodsRecipeBookComponent', () => {
  let component: FoodsRecipeBookComponent;
  let fixture: ComponentFixture<FoodsRecipeBookComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FoodsRecipeBookComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FoodsRecipeBookComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
