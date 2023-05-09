import {Component, Input, OnInit} from '@angular/core';
import {Plush} from '../models/plush.model';
import {PlushesService} from "../services/plush.service";
import {FavoriteProductsService} from "../services/favorite-products.service";

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.scss']
})
export class ProductCardComponent implements OnInit {
  @Input() product!: Plush;

  selectedPrice = 0;

  constructor(private plushesService: PlushesService, private favoritesService: FavoriteProductsService) { }

  onSizeSelected(e: any) {
    let priceIndex = this.product.size?.indexOf(e.target.value) || 0;
    this.selectedPrice = this.product.price[priceIndex];
  }

  onAddLike() {
    this.plushesService.onLikeProduct(this.product.id).then((product) => {
      this.product['isLiked'] = product['isLiked'];
      this.product['likes'] = product['likes'];
    })
  }

  async onAddToFavorites(): Promise<void> {
    const selectedSize = this.product.size ? this.product.size[this.product.price.indexOf(this.selectedPrice)] : null;
    await this.favoritesService.addToFavorites(this.product, selectedSize);
  }

  ngOnInit(): void {
    this.selectedPrice=this.product.price[0];
  }

}
