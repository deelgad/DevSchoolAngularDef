import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { TextnavbarComponent } from './textnavbar/textnavbar.component';
import { FormsModule } from '@angular/forms';
import { ListitemsComponent } from './listitems/listitems.component';
import { ItemComponent } from './item/item.component';
import { AvailabreitemsPipe } from './availabreitems.pipe'

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    TextnavbarComponent,
    ListitemsComponent,
    ItemComponent,
    AvailabreitemsPipe
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
