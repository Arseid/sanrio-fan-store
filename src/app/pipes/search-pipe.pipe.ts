import { Pipe, PipeTransform } from '@angular/core';
import {Product} from "../models/product.model";

@Pipe({
  name: 'filterBySearch'
})
export class SearchPipePipe implements PipeTransform {

  transform(products: Product[], searchresult?: string): Product[] {
    if (!searchresult) {
      return products;
    }

    return products.filter(s => s.title.toLowerCase().indexOf(searchresult.toLocaleLowerCase()) !== -1)
  }

}
