import { Component, OnInit } from '@angular/core';
import { Product } from '../models/product.model';
import { ProductsService } from '../services/product.service';

@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.scss'],
})
export class ProductsListComponent implements OnInit {
  products!: Product[];
  search: string = '';
  sortTitle: string = 'asc';
  sortDate: string = 'asc';
  constructor(private productsService: ProductsService) {}

  ngOnInit() {
    this.productsService.getAllProducts().then(products => {
      this.products = products;
    });
  }

  toggleSortOrder(sortType: string) {
    if (sortType === 'title') {
      if (this.sortTitle==='desc'){
        this.sortTitle = 'asc';
      }
      else {
        this.sortTitle = 'desc';
      }
    }
    else {
      if (this.sortDate==='desc'){
        this.sortDate = 'asc';
      }
      else {
        this.sortDate = 'desc';
      }
    }
  }
}
