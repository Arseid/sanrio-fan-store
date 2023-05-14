import { Injectable } from '@angular/core';
import {Order} from "../models/order.model";

@Injectable({
  providedIn: 'root'
})
export class OrderService {
  private serverUrl = 'http://localhost:3000';

  async getOrders(): Promise<Order[]> {
    const response = await fetch(`${this.serverUrl}/orders`);
    const data = await response.json();
    return data.map((order: any) => new Order(
        order.id,
        order.cart,
        order.contact
    ));
  }

  async getOrderById(id: string): Promise<Order> {
    const response = await fetch(`${this.serverUrl}/orders/${id}`);
    const data = await response.json();
    return new Order(
        data.id,
        data.cart,
        data.contact
    );
  }

  async createOrder(order: Order): Promise<Order> {
    const response = await fetch(`${this.serverUrl}/orders`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(order)
    });
    const data = await response.json();
    return new Order(
        data.id,
        data.cart,
        data.contact
    );
  }
}
