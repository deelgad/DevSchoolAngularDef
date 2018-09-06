import { Component } from '@angular/core';

import { Item } from 'src/app/models/item';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {

  item: Item;
  idioma: string;
  opcion: string;


  idiomaSeleccionado(event: string){
    this.idioma = event;
  }

  itemSeleccionado(event: Item){
    this.item = event;
    this.opcion = 'Item'
  }

  opcionSeleccionado(event: string){
    this.opcion = event;
  }
}
