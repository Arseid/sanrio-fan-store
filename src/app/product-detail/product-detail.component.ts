import { Component, OnInit } from '@angular/core';
import { Product } from '../models/product.model';
import {ActivatedRoute} from "@angular/router";
import {ProductsService} from "../services/product.service";
import {FavoriteProductsService} from "../services/favorite-products.service";

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss']
})
export class ProductDetailComponent implements OnInit {
  product!: Product;
  id!: number;
  orientation!: string;
  selectedPrice = 0;

  constructor(private productsService: ProductsService, private favoritesService: FavoriteProductsService,
              private route: ActivatedRoute) {
    this.route.params.subscribe(params => {
      this.id = parseInt(params['id']);
    })
  }

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

  async ngOnInit(): Promise<void> {
    this.product = await this.productsService.getOneProduct(this.id);
    this.selectedPrice = this.product.price[0];
    this.orientation = "landscape";
  }

}
