import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { TextnavbarComponent } from './textnavbar/textnavbar.component';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    TextnavbarComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
