import {Component, Input, OnInit} from '@angular/core';
import {Plush} from '../../../models/plush.model';
import {PlushesService} from "../../../services/plush.service";
import {FavoriteProductsService} from "../../../services/favorite-products.service";
import { CartService } from '../../../services/cart.service';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.scss']
})
export class ProductCardComponent implements OnInit {
  @Input() product!: Plush;

  validationState = false;
  selectedPrice = 0;
  imageUrl = "../../assets/svg/shopping-cart-plus.svg";

  constructor(private plushesService: PlushesService,
              private favoritesService: FavoriteProductsService,
              private cartService: CartService
  ) { }

  onSizeSelected(e: any) {
    let priceIndex = this.product.size?.indexOf(e.target.value) || 0;
    this.selectedPrice = this.product.price[priceIndex];
  }

  /* Deprecated
  onAddLike() {
    this.plushesService.onLikeProduct(this.product.id).then((product) => {
      this.product['isLiked'] = product['isLiked'];
      this.product['likes'] = product['likes'];
    })
  }
   */

  async onAddToCart(): Promise<void> {
    const selectedSize = this.product.size
        ? this.product.size[this.product.price.indexOf(this.selectedPrice)]
        : null;
    this.cartService.addToCart(this.product, selectedSize, 1);
    this.validationState = true;
    this.imageUrl = "../../assets/svg/plus.svg";
    setTimeout(() => {
      this.validationState = false;
      this.imageUrl = "../../assets/svg/shopping-cart-plus.svg";
    }, 1000);
  }

  ngOnInit(): void {
    this.selectedPrice=this.product.price[0];
  }

}
