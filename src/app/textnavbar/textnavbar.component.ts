import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'dev-textnavbar',
  templateUrl: './textnavbar.component.html',
  styleUrls: ['./textnavbar.component.css']
})
export class TextnavbarComponent {

  @Input() llegadaPadreaHijo;
  miMapa: any;

  constructor() { 
    this.miMapa = new Map();
    this.miMapa.set("es", "Tienda DevSchool");
    this.miMapa.set("en", "Shop DevSchool");
  }

  changeLenguaje(): string{
    if(this.llegadaPadreaHijo != null){
      return this.miMapa.get(this.llegadaPadreaHijo);
    }else{
      return this.miMapa.get("es");
    }
  }
}
