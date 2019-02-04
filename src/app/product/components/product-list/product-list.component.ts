import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../services/product.service';
import { ProductModel } from '../../models/product.model';
import { CartService } from 'src/app/cart/services/order.service';
import { ConfigOptionsService } from 'src/app/shared/services/config-options.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  products: ProductModel[];

  constructor(
    private productService: ProductService,
    private orderService: CartService
  ) {
  }

  ngOnInit() {
    this.products = this.productService.getProducts();
  }

  onBuyClick(product: ProductModel) {
    this.orderService.addProduct(product);
  }

}
