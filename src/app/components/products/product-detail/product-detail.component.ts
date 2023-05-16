import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";

import { Plush } from "../../../models/plush.model";
import { FavoriteProductsService } from "../../../services/favorite-products.service";
import { PlushesService } from "../../../services/plush.service";
import {CartService} from "../../../services/cart.service";

@Component({
  selector: "app-product-detail",
  templateUrl: "./product-detail.component.html",
  styleUrls: ["./product-detail.component.scss"],
})
export class ProductDetailComponent implements OnInit {
  product!: Plush;
  id!: number;
  orientation!: string;
  selectedPrice = 0;
  selectedQuantity = 1;
  validationState = false;
  imageUrl = "../../assets/svg/shopping-cart-plus.svg";

  constructor(
    private plushesService: PlushesService,
    private favoritesService: FavoriteProductsService,
    private cartService: CartService,
    private route: ActivatedRoute
  ) {
    this.route.params.subscribe((params) => {
      this.id = parseInt(params["id"]);
    });
  }

  onSizeSelected(e: any) {
    let priceIndex = this.product.size?.indexOf(e.target.value) || 0;
    this.selectedPrice = this.product.price[priceIndex];
  }

  onAddLike() {
    this.plushesService.onLikeProduct(this.product.id).then((product) => {
      this.product["isLiked"] = product["isLiked"];
      this.product["likes"] = product["likes"];
    });
  }

  async onAddToFavorites(): Promise<void> {
    const selectedSize = this.product.size
      ? this.product.size[this.product.price.indexOf(this.selectedPrice)]
      : null;
    await this.favoritesService.addToFavorites(this.product, selectedSize);
  }

  async onAddToCart(): Promise<void> {
    const selectedSize = this.product.size
        ? this.product.size[this.product.price.indexOf(this.selectedPrice)]
        : null;
    this.validationState = true;
    this.imageUrl = "../../assets/svg/plus.svg";
    this.cartService.addToCart(this.product, selectedSize, this.selectedQuantity);
    setTimeout(() => {
      this.validationState = false;
      this.imageUrl = "../../assets/svg/shopping-cart-plus.svg";
    }, 1000);
  }

  async ngOnInit(): Promise<void> {
    this.product = await this.plushesService.getOneProduct(this.id);
    this.selectedPrice = this.product.price[0];
    this.orientation = "landscape";
  }
}
