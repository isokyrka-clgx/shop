import { BrowserModule } from '@angular/platform-browser';
import { NgModule, InjectionToken } from '@angular/core';
import { AppComponent } from './app.component';
import { ProductModule } from './product/product.module';
import { CartModule } from './cart/cart.module';
import { SharedModule } from './shared/shared.module';

const ConstantsService = new InjectionToken<any>('constantService');

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    ProductModule,
    CartModule,
    SharedModule
  ],
  providers: [
    { provide: ConstantsService, useValue: '{ App: "Shop", Ver: "1.0" }' }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
