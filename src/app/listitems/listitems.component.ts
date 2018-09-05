import { Component } from '@angular/core';

interface item{
  name: string;
  currency: string;
  price: number;
  availabre: boolean;
  descrition: string;
}

@Component({
  selector: 'dev-listitems',
  templateUrl: './listitems.component.html',
  styleUrls: ['./listitems.component.css']
})
export class ListitemsComponent{

  listaItems: any[];

  constructor() { 
    this.listaItems = [{name: "Pelota" ,currency: "eur",price: 12,availabre: true,descrition: "Es una pelota"},
    {name: "Coche" ,currency: "eur",price: 25, availabre: false,descrition: "Es una coche"},
    {name: "linterna" ,currency: "lib",price: 5,availabre: true,descrition: "Es una linterna"}];
  }


}
