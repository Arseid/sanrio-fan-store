import { Pipe, PipeTransform } from '@angular/core';
import { Plush } from '../models/plush.model';

@Pipe({
  name: 'filterByPrice'
})
export class FilterByPricePipe implements PipeTransform {

  transform(products: Plush[], minPrice: number, maxPrice: number): Plush[] {
    return products.filter(product => product.price[0] >= minPrice && product.price[0] <= maxPrice);
  }

}
