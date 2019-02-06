import { BrowserModule } from '@angular/platform-browser';
import { NgModule, InjectionToken } from '@angular/core';
import { AppComponent } from './app.component';
import { ProductModule } from './product/product.module';
import { CartModule } from './cart/cart.module';
import { SharedModule } from './shared/shared.module';
import { ContactUsComponent } from './contact-us/components/contact-us/contact-us.component';

const ConstantsService = new InjectionToken<any>('constantService');

@NgModule({
  declarations: [AppComponent, ContactUsComponent],
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
