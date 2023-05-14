import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductDetailComponent } from './pages/product-detail/product-detail.component';
import { CocktailLandingComponent } from './pages/cocktail-landing/cocktail-landing.component';
import { HeaderComponent } from './components/header/header.component';
import { BannerLandingComponent } from './pages/cocktail-landing/components/banner-landing/banner-landing.component';
import { PopularDrinksComponent } from './pages/cocktail-landing/components/popular-drinks/popular-drinks.component';
import { LatestDrinksComponent } from './pages/cocktail-landing/components/latest-drinks/latest-drinks.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductDetailComponent,
    CocktailLandingComponent,
    HeaderComponent,
    BannerLandingComponent,
    PopularDrinksComponent,
    LatestDrinksComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
