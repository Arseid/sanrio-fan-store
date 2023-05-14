import {Plush} from "./plush.model";

export class Order {
    constructor(
        public id: string,
        public products: { product: Plush; size: string | null; quantity: number }[],
        public customerInfo: {
            name: string;
            email: string;
            phone: string;
            address: string;
        }
    ) {}
}
