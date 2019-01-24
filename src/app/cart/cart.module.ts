import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {CartComponent} from './components/cart.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [CartComponent],
  exports: [CartComponent]
})
export class CartModule {
}
