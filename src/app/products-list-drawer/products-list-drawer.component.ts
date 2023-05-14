import {Component, EventEmitter, Output} from '@angular/core';

@Component({
  selector: 'app-products-list-drawer',
  templateUrl: './products-list-drawer.component.html',
  styleUrls: ['./products-list-drawer.component.scss'],
})
export class ProductsListDrawerComponent {
  @Output() searchEvent = new EventEmitter<string>();

  emitSearchEvent(event: any): void {
    this.searchEvent.emit(event.target.value);
  }
}
