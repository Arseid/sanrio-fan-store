import { Pipe, PipeTransform } from '@angular/core';
import { Plush } from '../models/plush.model';

@Pipe({
  name: 'sortByTitle'
})
export class SortByTitlePipe implements PipeTransform {

  transform(products: Plush[], order?: string): Plush[] {
    let desc = !(order && order === 'asc');
    return products.sort((a, b) => {
      if (desc) {
        return b.title.toLowerCase().localeCompare(a.title.toLowerCase());
      } else {
        return a.title.toLowerCase().localeCompare(b.title.toLowerCase());
      }
    });
  }

}
