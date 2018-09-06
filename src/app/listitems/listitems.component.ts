import { Component,Output,EventEmitter} from '@angular/core';

import { Item } from 'src/app/models/item';

@Component({
  selector: 'dev-listitems',
  templateUrl: './listitems.component.html',
  styleUrls: ['./listitems.component.css']
})
export class ListitemsComponent{

  @Output() itemaPadre;
  listaItems: Item[];
  item: Item;
  checkbox: boolean;
  texto: string;

  constructor() { 
    this.itemaPadre = new EventEmitter<Item>();

    this.listaItems = [
      {id:"1",name: "Pelota" ,currency: "eur",price: 12,availabre: true,descrition: "Es una pelota"},
      {id:"2",name: "Coche" ,currency: "eur",price: 25, availabre: false,descrition: "Es una coche"},
      {id:"3",name: "linterna" ,currency: "lib",price: 5,availabre: true,descrition: "Es una linterna"}
    ];
  }

  itemSeleccionado(algo: string){
    this.item = this.listaItems.find( i => i.id == algo);
    this.itemaPadre.emit(this.item);
  }
}
