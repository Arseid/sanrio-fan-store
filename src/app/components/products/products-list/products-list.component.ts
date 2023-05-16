import { Component, OnInit } from '@angular/core';

import { Plush } from '../../../models/plush.model';
import { PlushesService } from '../../../services/plush.service';

@Component({
  selector: "app-products-list",
  templateUrl: "./products-list.component.html",
  styleUrls: ["./products-list.component.scss"],
})
export class ProductsListComponent implements OnInit {
  products!: Plush[];
  search: string = "";
  sortTitle: string | undefined = "asc";
  sortDate: string | undefined = "asc";
  sortPrice: string | undefined = "asc";
  sortType: string = "name";
  sortOrder: string = "asc";
  minPrice: number = 0;
  maxPrice: number = Infinity;
  constructor(private plushesService: PlushesService) {}

  ngOnInit() {
    this.plushesService.getAllProducts().then((products) => {
      this.products = products;
    });
  }

  handleSearchEvent(searchQuery: string): void {
    this.search = searchQuery;
  }

  handleSortTypeEvent(sortType: string): void {
    this.sortType = sortType;
    this.applySorting();
  }

  handleSortOrderEvent(sortOrder: string): void {
    this.sortOrder = sortOrder;
    this.applySorting();
  }

  applySorting(): void {
    this.sortTitle = this.sortType === "name" ? this.sortOrder : undefined;
    this.sortDate = this.sortType === "date" ? this.sortOrder : undefined;
    this.sortPrice = this.sortType === "price" ? this.sortOrder : undefined;
  }

  handlePriceRangeEvent(priceRange: { min: number; max: number }) {
    this.minPrice = priceRange.min;
    this.maxPrice = priceRange.max;
  }
}
