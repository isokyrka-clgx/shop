import {BrowserModule} from '@angular/platform-browser';
import {MatButtonModule, MatCheckboxModule, MatTableModule} from '@angular/material';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {ProductComponent} from './products/components/product/product.component';
import {ProductListComponent} from './products/components/product-list/product-list.component';
import {CartComponent} from './cart/components/cart.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductComponent,
    ProductListComponent,
    CartComponent
  ],
  imports: [
    BrowserModule,
    MatButtonModule,
    MatCheckboxModule,
    MatTableModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
