import { Pipe, PipeTransform } from '@angular/core';
import {Product} from "../models/product.model";

@Pipe({
  name: 'sortByDate'
})
export class SortByDatePipe implements PipeTransform {

  transform(products: Product[], order?: any) {
    let desc = !(order && order === 'asc');
    return products.sort((a, b) => {
      const aPublicationDate = new Date(a.publicationDate);
      const bPublicationDate = new Date(b.publicationDate);

      if (desc) return bPublicationDate.getTime() - aPublicationDate.getTime();
      else return aPublicationDate.getTime() - bPublicationDate.getTime()
    });
  }

}