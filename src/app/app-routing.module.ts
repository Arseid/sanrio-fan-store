import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import {
    ProductDetailComponent
} from './components/products/product-detail/product-detail.component';
import { ProductsListComponent } from './components/products/products-list/products-list.component';
import { AboutComponent } from './view/about/about.component';
import { CartComponent } from './view/cart/cart.component';
import { CheckoutComponent } from './view/checkout/checkout.component';
import { FavoritesComponent } from './view/favorites/favorites.component';

const routes: Routes = [
  { path: "", component: ProductsListComponent },
  { path: "product/:id", component: ProductDetailComponent },
  { path: "favorites", component: FavoritesComponent },
  { path: "about", component: AboutComponent },
  { path: "cart", component: CartComponent },
  { path: "checkout", component: CheckoutComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
