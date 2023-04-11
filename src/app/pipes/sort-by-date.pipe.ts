import { Pipe, PipeTransform } from '@angular/core';
import {Plush} from "../models/plush.model";

@Pipe({
  name: 'sortByDate'
})
export class SortByDatePipe implements PipeTransform {

  transform(products: Plush[], order?: any) {
    let desc = !(order && order === 'asc');
    return products.sort((a, b) => {
      const aPublicationDate = new Date(a.publicationDate);
      const bPublicationDate = new Date(b.publicationDate);

      if (desc) return bPublicationDate.getTime() - aPublicationDate.getTime();
      else return aPublicationDate.getTime() - bPublicationDate.getTime()
    });
  }

}