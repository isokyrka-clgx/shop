import { BrowserModule } from '@angular/platform-browser';
import { MatButtonModule, MatCheckboxModule, MatTableModule } from '@angular/material';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ProductModule } from './product/product.module';
import { CartModule } from './cart/cart.module';
import { OrderModule } from './order/order.module';
import { HighlightDirective } from './shared/highlight.directive';
import { NO_ERRORS_SCHEMA } from '@angular/compiler/src/core';
import { SharedModule } from './shared/shared.module';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    MatButtonModule,
    MatCheckboxModule,
    MatTableModule,
    ProductModule,
    CartModule,
    OrderModule,
    SharedModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
