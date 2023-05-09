import { Injectable } from '@angular/core';
import { Plush } from "../models/plush.model";

@Injectable({
  providedIn: 'root'
})
export class FavoriteProductsService {
  private favorites: Plush[] = [];

  constructor() {
    this.getFavoritesFromLocalStorage();
  }

  private getFavoritesFromLocalStorage(): void {
    const storedFavorites = localStorage.getItem('favorites');
    if (storedFavorites) {
      this.favorites = JSON.parse(storedFavorites);
    }
  }

  private saveFavoritesToLocalStorage(): void {
    localStorage.setItem('favorites', JSON.stringify(this.favorites));
  }

  addToFavorites(productToAdd: Plush): void {
    if (
        !(
            this.favorites.some(
                (product) =>
                    product.id === productToAdd.id &&
                    product.selectedSize === productToAdd.selectedSize
            )
        )
    ) {
      this.favorites.push(productToAdd);
      this.saveFavoritesToLocalStorage();
    }
  }

  removeFromFavorites(id: number): void {
    this.favorites = this.favorites.filter(product => product.id !== id);
    this.saveFavoritesToLocalStorage();
  }

  getFavorites(): Plush[] {
    return this.favorites;
  }
}
