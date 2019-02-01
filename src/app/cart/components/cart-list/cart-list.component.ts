import { Component, ViewChild, ElementRef, Renderer2 } from '@angular/core';
import { OrderService } from 'src/app/shared/services/order.service';
import { ProductModel } from 'src/app/product/models/product.model';
import { CartDTOModel } from '../../models/cart-dto.model';

@Component({
  selector: 'app-cart-list',
  templateUrl: './cart-list.component.html',
  styleUrls: ['./cart-list.component.css']
})
export class CartListComponent {

  @ViewChild('orderedP')
  orderedP: ElementRef;

  constructor(
    private orderService: OrderService,
    private renderer: Renderer2
  ) {
  }

  onDelete(product: ProductModel) {
    this.orderService.removeProduct(product);
  }

  onChangeQuantity(cartDTO: CartDTOModel) {
    this.orderService.updateQuantity(cartDTO);
  }

  onWheel(event: any) {
    if ((<WheelEvent>event).deltaY > 0) {
      this.renderer.setStyle(this.orderedP.nativeElement, "font-size", "20px");
    } else {
      this.renderer.setStyle(this.orderedP.nativeElement, "font-size", "15px");
    }
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
