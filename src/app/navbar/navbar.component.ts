import { Component, OnInit ,Output,EventEmitter} from '@angular/core';

@Component({
  selector: 'dev-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent{

  @Output() salidaHijoaPadre;

  constructor() { 
    this.salidaHijoaPadre = new EventEmitter<string>();
  }

  hijoClick(languajeSelected : string){
    this.salidaHijoaPadre.emit(languajeSelected);
  }
}
