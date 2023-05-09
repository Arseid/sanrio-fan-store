import {Injectable} from '@angular/core';
import {Plush} from "../models/plush.model";

@Injectable({
    providedIn: 'root'
})
export class PlushesService {
    private serverUrl = 'http://localhost:3000';

    async getOneProduct(id: number): Promise<Plush> {
        const response = await fetch(`${this.serverUrl}/plushes/${id}`);
        const data = await response.json();
        return new Plush(
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

    async getAllProducts(): Promise<Plush[]> {
        const response = await fetch(`${this.serverUrl}/plushes`);
        const data = await response.json();
        console.log(data);
        return data.map((plush: any) => new Plush(
            plush['id'],
            plush['title'],
            plush['description'],
            plush['price'],
            plush['imageUrl'],
            plush['likes'],
            plush['publicationDate'],
            plush['isLiked'],
            plush['size']
        ));
    }

    async getProductPrice(id: number, size: string): Promise<number | null> {
        const product = await this.getOneProduct(id);
        if (!product.size || !product.price) {
            return null;
        }

        const sizeIndex = product.size.indexOf(size);
        if (sizeIndex === -1) {
            return null;
        }

        return product.price[sizeIndex];
    }

    async onLikeProduct(id: number): Promise<Plush> {
        const response = await fetch(`${this.serverUrl}/plushes/${id}/likes`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
        });
        const data = await response.json();
        return new Plush(
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