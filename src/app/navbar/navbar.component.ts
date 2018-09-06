import { Component,Output,EventEmitter} from '@angular/core';

@Component({
  selector: 'dev-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent{

  @Output() salidaHijoaPadre;
  @Output() clickaHijoaPadre;

  languajeSelected: string;
  idiomas: any[];

  constructor() { 
    this.salidaHijoaPadre = new EventEmitter<string>();
    this.clickaHijoaPadre = new EventEmitter<string>();
    this.languajeSelected ="es";
    this.idiomas=[
      {key:"es",value:"Español"},
      {key:"en",value:"Ingles"}
    ]
  }

  hijoClick(){
    this.salidaHijoaPadre.emit(this.languajeSelected);
  }

  onclickOption(optionSlected: string){
    this.clickaHijoaPadre.emit(optionSlected);
  }
}
