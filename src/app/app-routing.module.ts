import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CountriesComponent } from './components/countries-page/countries-page.component';
import { HomePageComponent } from './components/home-page/home-page.component';

const routes: Routes = [
  {path : '' , component : HomePageComponent},
  {path : 'countries' , component : CountriesComponent }  
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
