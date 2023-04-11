import {Component, Input, OnInit} from '@angular/core';
import {Product} from '../models/product.model';
import {ProductsService} from "../services/product.service";
import {FavoriteProductsService} from "../services/favorite-products.service";

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.scss']
})
export class ProductCardComponent implements OnInit {
  @Input() product!: Product;

  selectedPrice = 0;

  constructor(private productsService: ProductsService, private favoritesService: FavoriteProductsService) { }

  onSizeSelected(e: any) {
    let priceIndex = this.product.size?.indexOf(e.target.value) || 0;
    this.selectedPrice = this.product.price[priceIndex];
  }

  onAddLike() {
    this.productsService.onLikeProduct(this.product.id).then((product) => {
      this.product['isLiked'] = product['isLiked'];
      this.product['likes'] = product['likes'];
    })
  }

  onAddToFavorites(): void {
    this.favoritesService.addToFavorites(this.product);
  }

  ngOnInit(): void {
    this.selectedPrice=this.product.price[0];
  }

}
