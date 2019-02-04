import { Component, Input, Output, EventEmitter } from '@angular/core';
import { ProductComponent } from 'src/app/product/components/product/product.component';
import { ProductModel } from 'src/app/product/models/product.model';
import { CartDTOModel } from '../../models/cart-dto.model';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent {

  @Input()
  product: ProductModel;

  quantity = 1;

  @Output() delete = new EventEmitter<ProductModel>();
  @Output() changeQuantity = new EventEmitter<CartDTOModel>();

  onDelete(product: ProductModel) {
    this.delete.emit(product);
  }

  onChange() {
    this.changeQuantity.emit(new CartDTOModel(this.product, this.quantity));
  }

}
