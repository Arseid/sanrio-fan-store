import { Injectable } from '@angular/core';
import {Product} from "../models/product.model";

@Injectable({
  providedIn: 'root'
})
export class FavoriteProductsService {
  private favorites: Product[] = [];

  addToFavorites(productToAdd: Product): void {
    if (!(this.favorites.some(product => product.id === productToAdd.id))) {
      this.favorites.push(productToAdd);
    }
  }

  removeFromFavorites(id: number): void {
    this.favorites = this.favorites.filter(product => product.id !== id);
  }

  getFavorites(): Product[] {
    return this.favorites;
  }
}
