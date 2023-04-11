import { Injectable } from '@angular/core';
import {Plush} from "../models/plush.model";

@Injectable({
  providedIn: 'root'
})
export class FavoriteProductsService {
  private favorites: Plush[] = [];

  addToFavorites(productToAdd: Plush): void {
    if (!(this.favorites.some(product => product.id === productToAdd.id))) {
      this.favorites.push(productToAdd);
    }
  }

  removeFromFavorites(id: number): void {
    this.favorites = this.favorites.filter(product => product.id !== id);
  }

  getFavorites(): Plush[] {
    return this.favorites;
  }
}
