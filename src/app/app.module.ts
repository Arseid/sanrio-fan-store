import { registerLocaleData } from '@angular/common';
import localeEn from '@angular/common/locales/en';
import { LOCALE_ID, NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSliderModule } from '@angular/material/slider';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';
import { ProductCardComponent } from './components/products/product-card/product-card.component';
import {
    ProductDetailComponent
} from './components/products/product-detail/product-detail.component';
import {
    ProductsListDrawerComponent
} from './components/products/products-list-drawer/products-list-drawer.component';
import { ProductsListComponent } from './components/products/products-list/products-list.component';
import { SearchPipePipe } from './pipes/search-pipe.pipe';
import { SortByDatePipe } from './pipes/sort-by-date.pipe';
import { SortByTitlePipe } from './pipes/sort-by-title.pipe';
import { AboutComponent } from './view/about/about.component';
import { CartComponent } from './view/cart/cart.component';
import { CheckoutComponent } from './view/checkout/checkout.component';
import { FavoritesComponent } from './view/favorites/favorites.component';
import { SortByPricePipe } from './pipes/sort-by-price.pipe';

registerLocaleData(localeEn, "en");

@NgModule({
  declarations: [
    AppComponent,
    ProductCardComponent,
    SortByDatePipe,
    SearchPipePipe,
    ProductsListComponent,
    HeaderComponent,
    FooterComponent,
    ProductDetailComponent,
    AboutComponent,
    SortByTitlePipe,
    FavoritesComponent,
    CartComponent,
    CheckoutComponent,
    ProductsListDrawerComponent,
    SortByPricePipe,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    FormsModule,
    MatSliderModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
  ],
  providers: [{ provide: LOCALE_ID, useValue: "en" }],
  bootstrap: [AppComponent],
})
export class AppModule {}
