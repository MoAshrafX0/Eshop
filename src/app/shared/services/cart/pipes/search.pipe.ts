import { Pipe, PipeTransform } from '@angular/core';
import { Prouduct } from '../../../../pages/interfaces/products';

@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {

  transform(productes:Prouduct[],searchterm:string): any {
   return productes.filter((item)=>item.title.includes(searchterm))
   
  
  }
}
