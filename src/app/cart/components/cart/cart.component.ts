import { Component, Input } from '@angular/core';
import { ProductComponent } from 'src/app/product/components/product/product.component';
import { ProductModel } from 'src/app/product/models/product.model';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent {

  @Input()
  product: ProductModel;

}
