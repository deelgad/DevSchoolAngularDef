import { Pipe, PipeTransform } from '@angular/core';

import { Item } from 'src/app/models/item';

@Pipe({
  name: 'availabreitems'
})
export class AvailabreitemsPipe implements PipeTransform {

  transform(listaItems: Item[], checkbox: boolean,text: string): Item[] {
    
    if(checkbox){
      if(text != null){
        return listaItems.filter( i =>i.availabre == true).filter(i=>i.name.toLowerCase().includes(text.toLowerCase()));
      }
      return listaItems.filter( i =>i.availabre == true);
    }else{
      if(text != null){
        return listaItems.filter(i=>i.name.toLowerCase().includes(text.toLowerCase()));
      }
      return listaItems;
    }
  }
}
