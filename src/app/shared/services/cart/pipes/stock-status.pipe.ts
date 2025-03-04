import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'stockStatus'
})
export class StockStatusPipe implements PipeTransform {

  transform(qty: number) :string|null {
    if(qty > 100) {
      return null;    
  }else{
    return `only ${qty} left`
  }
  }
}
