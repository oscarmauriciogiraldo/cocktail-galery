import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BannerLandingComponent } from './banner-landing.component';

describe('BannerLandingComponent', () => {
  let component: BannerLandingComponent;
  let fixture: ComponentFixture<BannerLandingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BannerLandingComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BannerLandingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
