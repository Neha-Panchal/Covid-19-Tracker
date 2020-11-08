import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CountriesComponent } from './components/countries-page/countries-page.component';
import { HomePageComponent } from './components/home-page/home-page.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { NavigationBarComponent } from './components/navigation-bar/navigation-bar.component';
import { HttpClientModule } from '@angular/common/http';
// import { Ng2GoogleChartsModule } from 'ng2-google-charts';
import { GoogleChartsModule } from 'angular-google-charts';

@NgModule({
  declarations: [
    AppComponent,
    CountriesComponent,
    HomePageComponent,
    DashboardComponent,
    NavigationBarComponent,
    // Ng2GoogleChartsModule,

    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    GoogleChartsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
