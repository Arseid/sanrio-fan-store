import {Injectable} from '@angular/core';
import {Product} from "../models/product.model";

@Injectable({
    providedIn: 'root'
})
export class ProductsService {
    private serverUrl = 'http://localhost:3000';

    async getOneProduct(id: number): Promise<Product> {
        const response = await fetch(`${this.serverUrl}/products/${id}`);
        const data = await response.json();
        return new Product(
            data['id'],
            data['title'],
            data['description'],
            data['price'],
            data['imageUrl'],
            data['likes'],
            data['publicationDate'],
            data['isLiked'],
            data['size']
        );
    }

    async getAllProducts(): Promise<Product[]> {
        const response = await fetch(`${this.serverUrl}/products`);
        const data = await response.json();
        console.log(data);
        return data.map((product: any) => new Product(
            product['id'],
            product['title'],
            product['description'],
            product['price'],
            product['imageUrl'],
            product['likes'],
            product['publicationDate'],
            product['isLiked'],
            product['size']
        ));
    }

    async onLikeProduct(id: number): Promise<Product> {
        const response = await fetch(`${this.serverUrl}/products/${id}/likes`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
        });
        const data = await response.json();
        return new Product(
            data['id'],
            data['title'],
            data['description'],
            data['price'],
            data['imageUrl'],
            data['likes'],
            data['publicationDate'],
            data['isLiked'],
            data['size']
        );
    }
}