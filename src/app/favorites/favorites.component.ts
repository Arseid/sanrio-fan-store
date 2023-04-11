import { Component } from '@angular/core';
import {FavoriteProductsService} from "../services/favorite-products.service";
import {Plush} from "../models/plush.model";

@Component({
  selector: 'app-favorites',
  templateUrl: './favorites.component.html',
  styleUrls: ['./favorites.component.scss'],
})
export class FavoritesComponent {
  favorites: Plush[] = [];
  search: string = '';
  sortTitle: string = 'asc';
  sortDate: string = 'asc';

  constructor(private favoritesService: FavoriteProductsService) {
  }

  ngOnInit(): void {
    this.favorites = this.favoritesService.getFavorites();
  }

  onRemoveFromFavorites(product: Plush): void {
    this.favoritesService.removeFromFavorites(product.id);
    this.favorites = this.favoritesService.getFavorites();
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
