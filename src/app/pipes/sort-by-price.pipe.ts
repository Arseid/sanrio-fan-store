import { Pipe, PipeTransform } from '@angular/core';
import { Plush } from "../models/plush.model";

@Pipe({
  name: 'sortByPrice'
})
export class SortByPricePipe implements PipeTransform {

  transform(products: Plush[], order?: any): Plush[] {
    let desc = !(order && order === 'asc');
    return products.sort((a, b) => {
      const aPrice = a.selectedPrice ?? a.price[0];
      const bPrice = b.selectedPrice ?? b.price[0];

      if (desc) return bPrice - aPrice;
      else return aPrice - bPrice;
    });
  }

}
