import { Injectable } from '@angular/core';
import { Plush } from '../models/plush.model';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private cart: { product: Plush; size: string | null; quantity: number }[] = [];

  constructor() {}

  addToCart(productToAdd: Plush, selectedSize: string | null, quantity: number): void {
    const existingProductIndex = this.cart.findIndex(
        (item) => item.product.id === productToAdd.id && item.size === selectedSize
    );

    if (existingProductIndex >= 0) {
      this.cart[existingProductIndex].quantity += quantity;
    }
    else {
      this.cart.push({ product: productToAdd, size: selectedSize, quantity });
    }
  }

  getCart(): { product: Plush; size: string | null; quantity: number }[] {
    return this.cart;
  }
}