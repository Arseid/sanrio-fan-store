import {Component, EventEmitter, Output} from '@angular/core';

@Component({
  selector: 'app-products-list-drawer',
  templateUrl: './products-list-drawer.component.html',
  styleUrls: ['./products-list-drawer.component.scss'],
})
export class ProductsListDrawerComponent {
  @Output() searchEvent = new EventEmitter<string>();
  @Output() sortTypeEvent = new EventEmitter<string>();
  @Output() sortOrderEvent = new EventEmitter<string>();
  @Output() priceRangeEvent = new EventEmitter<{min: number, max: number}>();

  emitSearchEvent(event: any): void {
    this.searchEvent.emit(event.target.value);
  }

  emitSortTypeEvent(event: any): void {
    this.sortTypeEvent.emit(event.target.value);
  }

  emitSortOrderEvent(order: string): void {
    this.sortOrderEvent.emit(order);
  }

  emitPriceRangeEvent(minPrice: string, maxPrice: string): void {
    const min = minPrice ? parseFloat(minPrice) : 0;
    const max = maxPrice ? parseFloat(maxPrice) : Infinity;
    this.priceRangeEvent.emit({min, max});
  }

}
