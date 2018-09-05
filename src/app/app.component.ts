import { Component,OnInit,OnChanges,OnDestroy } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  idioma: String;

  idiomaSeleccionado(event: string){
    this.idioma = event;
  }
}
