import { Component } from '@angular/core';
import { CartService } from '../services/cart.service';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.scss']
})
export class CheckoutComponent {
  contact: { name: string; email: string; phone: string; address: string } = {
    name: '',
    email: '',
    phone: '',
    address: ''
  };
  orderId: string | null = null;

  constructor(public cartService: CartService) {}

  onSubmit(): void {
    console.log('Contact form submitted:', this.contact);
    this.orderId = this.generateRandomOrderId();
    this.cartService.clearCart();
  }

  generateRandomOrderId(): string {
    return Math.random().toString(36).substring(2, 12).toUpperCase();
  }
}