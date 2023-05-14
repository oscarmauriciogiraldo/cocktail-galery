import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CocktailLandingComponent } from './pages/cocktail-landing/cocktail-landing.component';

const routes: Routes = [
  {path: "The-Cocktail-DB", component: CocktailLandingComponent},
  {path: "", redirectTo: "/The-Cocktail-DB", pathMatch: "full"},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
