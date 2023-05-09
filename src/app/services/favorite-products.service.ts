import { Injectable } from '@angular/core';
import { Plush } from "../models/plush.model";
import {PlushesService} from "./plush.service";

@Injectable({
  providedIn: 'root'
})
export class FavoriteProductsService {
  private favorites: Plush[] = [];

  constructor(private plushesService: PlushesService) {
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

  async addToFavorites(productToAdd: Plush, selectedSize: string | null): Promise<void> {
    const productWithSelectedSizeAndPrice: Plush = {
      ...productToAdd,
      selectedSize: selectedSize,
      selectedPrice: selectedSize ? await this.plushesService.getProductPrice(productToAdd.id, selectedSize) : null,
    };

    if (
        !(
            this.favorites.some(
                (product) =>
                    product.id === productToAdd.id &&
                    product.selectedSize === productWithSelectedSizeAndPrice.selectedSize
            )
        )
    ) {
      this.favorites.push(productWithSelectedSizeAndPrice);
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
