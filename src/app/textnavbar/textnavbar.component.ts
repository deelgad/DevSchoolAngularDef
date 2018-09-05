import { Component, Input } from '@angular/core';

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
    this.miMapa.set("es", "Bienvenido a la Tienda de DevSchool");
    this.miMapa.set("en", "Welcome to DevSchool Shop");
  }

  changeLenguaje(): string{
    if(this.llegadaPadreaHijo){
      return this.miMapa.get(this.llegadaPadreaHijo);
    }else{
      return this.miMapa.get("es");
    }
  }
}
