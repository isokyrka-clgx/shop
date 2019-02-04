import { Component, Renderer2 } from '@angular/core';
import { CartService } from 'src/app/cart/services/order.service';
import { ProductModel } from 'src/app/product/models/product.model';
import { CartDTOModel } from '../../models/cart-dto.model';

@Component({
  selector: 'app-cart-list',
  templateUrl: './cart-list.component.html',
  styleUrls: ['./cart-list.component.css']
})
export class CartListComponent {

  constructor(
    private orderService: CartService,
    private renderer: Renderer2
  ) {
  }

  onDelete(product: ProductModel) {
    this.orderService.removeProduct(product);
  }

  onChangeQuantity(cartDTO: CartDTOModel) {
    this.orderService.updateQuantity(cartDTO);
  }

  getOrderedProducts(): ProductModel[] {
    return this.orderService.getSelectedProducts();
  }

  getOrdersQuanity(): number {
    return this.orderService.getQuantity();
  }

  getTotalPrice(): number {
    return this.orderService.getTotalPrice();
  }
}
