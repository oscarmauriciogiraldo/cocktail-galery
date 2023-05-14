import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CocktailLandingComponent } from './cocktail-landing.component';

describe('CocktailLandingComponent', () => {
  let component: CocktailLandingComponent;
  let fixture: ComponentFixture<CocktailLandingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CocktailLandingComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CocktailLandingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
