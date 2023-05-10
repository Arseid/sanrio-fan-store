import { Injectable } from '@angular/core';
import { Plush } from '../models/plush.model';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private cart: { product: Plush; size: string | null; quantity: number }[] = [];

  constructor() {
    this.getCartFromLocalStorage();
  }

  private getCartFromLocalStorage(): void {
    const storedCart = localStorage.getItem('cart');
    if (storedCart) {
      this.cart = JSON.parse(storedCart);
    }
  }

  private saveCartToLocalStorage(): void {
    localStorage.setItem('cart', JSON.stringify(this.cart));
  }

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

    this.saveCartToLocalStorage();
  }

  getPriceForItem(item: { product: Plush; size: string | null }): number {
    if (item.size === null || item.product.size === undefined) {
      return item.product.price[0];
    }
    return item.product.price[item.product.size?.indexOf(item.size) || 0];
  }

  getTotalPrice(): number {
    return this.cart.reduce((total, item) => {
      const itemPrice = this.getPriceForItem(item);
      return total + itemPrice * item.quantity;
    }, 0);
  }

  increaseQuantity(product: Plush, size: string | null): void {
    const existingProductIndex = this.cart.findIndex(
        (item) => item.product.id === product.id && item.size === size
    );

    if (existingProductIndex >= 0) {
      this.cart[existingProductIndex].quantity += 1;
      this.saveCartToLocalStorage();
    }
  }

  decreaseQuantity(product: Plush, size: string | null): void {
    const existingProductIndex = this.cart.findIndex(
        (item) => item.product.id === product.id && item.size === size
    );

    if (existingProductIndex >= 0) {
      this.cart[existingProductIndex].quantity -= 1;

      if (this.cart[existingProductIndex].quantity <= 0) {
        this.cart.splice(existingProductIndex, 1);
      }
      this.saveCartToLocalStorage();
    }
  }

  removeFromCart(product: Plush, size: string | null): void {
    const existingProductIndex = this.cart.findIndex(
        (item) => item.product.id === product.id && item.size === size
    );

    if (existingProductIndex >= 0) {
      this.cart.splice(existingProductIndex, 1);
      this.saveCartToLocalStorage();
    }
  }

  clearCart(): void {
    this.cart = [];
    localStorage.removeItem('cart');
  }

  getCart(): { product: Plush; size: string | null; quantity: number }[] {
    return this.cart;
  }
}