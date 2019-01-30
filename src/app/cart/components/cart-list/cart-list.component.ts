import { Component } from '@angular/core';
import { OrderService } from 'src/app/order/services/order.service';
import { ProductModel } from 'src/app/product/models/product.model';

@Component({
  selector: 'app-cart-list',
  templateUrl: './cart-list.component.html',
  styleUrls: ['./cart-list.component.css']
})
export class CartListComponent {

  totalPrice: number;
  orderedProducts: Array<ProductModel>;

  constructor(
    private orderService: OrderService
  ) {
    this.orderedProducts = orderService.getSelectedProducts();
  }

}
