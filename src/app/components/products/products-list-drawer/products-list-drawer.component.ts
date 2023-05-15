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
  isAscActive = true;
  isDescActive = false;

  emitSearchEvent(event: any): void {
    this.searchEvent.emit(event.target.value);
  }

  emitSortTypeEvent(event: any): void {
    this.sortTypeEvent.emit(event.target.value);
  }

  emitSortOrderEvent(order: string): void {
    this.sortOrderEvent.emit(order);
  }

  toggleAscActive() {
    this.isAscActive = true;
    this.isDescActive = false;
  }

  toggleDescActive() {
    this.isDescActive = true;
    this.isAscActive = false;
  }
}
