import { Pipe, PipeTransform } from '@angular/core';
import {Plush} from "../models/plush.model";

@Pipe({
  name: 'filterBySearch'
})
export class SearchPipePipe implements PipeTransform {

  transform(products: Plush[], searchresult?: string): Plush[] {
    if (!searchresult) {
      return products;
    }

    return products.filter(s => s.title.toLowerCase().indexOf(searchresult.toLocaleLowerCase()) !== -1)
  }

}
