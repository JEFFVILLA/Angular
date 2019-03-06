import { BrowserModule } from '@angular/platform-browser';
import {  NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { InfoComponent } from './components/info/info.component';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { RoutesRoutingModule } from './app-routing.module';
import { HttpClientModule , HttpClient } from '@angular/common/http';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    InfoComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    RoutesRoutingModule,
    HttpClientModule
  ],
  providers: [ ],
  bootstrap: [AppComponent]
})
export class AppModule { }
