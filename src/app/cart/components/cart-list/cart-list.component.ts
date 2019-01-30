import { Component, ViewChild, ElementRef, Renderer2 } from '@angular/core';
import { OrderService } from 'src/app/order/services/order.service';
import { ProductModel } from 'src/app/product/models/product.model';

@Component({
  selector: 'app-cart-list',
  templateUrl: './cart-list.component.html',
  styleUrls: ['./cart-list.component.css']
})
export class CartListComponent {

  @ViewChild('orderedP')
  orderedP: ElementRef;

  totalPrice: number;
  quantity: number;
  orderedProducts: Array<ProductModel>;

  constructor(
    private orderService: OrderService,
    private renderer: Renderer2
  ) {
    this.orderedProducts = orderService.getSelectedProducts();
    this.quantity = this.orderedProducts.length;
    this.totalPrice = orderService.getTotalPrice();
  }

  onDelete(product: ProductModel) {
    this.orderService.removeProduct(product);
    this.totalPrice = this.orderService.getTotalPrice();
  }

  onWheel(event: any) {
    if ((<WheelEvent>event).deltaY > 0) {
      this.renderer.setStyle(this.orderedP.nativeElement, "font-size", "20px");
    } else {
      this.renderer.setStyle(this.orderedP.nativeElement, "font-size", "15px");
    }
  }

}
