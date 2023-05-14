import { Component } from '@angular/core';
import { CartService } from '../services/cart.service';
import { Order } from '../models/order.model'; // Import the Order model

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
  order: Order | null = null; // replace orderId with order

  constructor(public cartService: CartService) {}

  onSubmit(): void {
    this.order = new Order(
        this.generateRandomOrderId(),
        this.cartService.getCart(),
        {
          name: this.contact.name,
          email: this.contact.email,
          phone: this.contact.phone,
          address: this.contact.address
        }
    );
    console.log(this.order);

    this.cartService.clearCart();
  }

  generateRandomOrderId(): string {
    return Math.random().toString(36).substring(2, 12).toUpperCase();
  }
}