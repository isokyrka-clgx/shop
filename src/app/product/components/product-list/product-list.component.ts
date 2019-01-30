import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../services/product.service';
import { ProductModel } from '../../models/product.model';
import { OrderService } from 'src/app/order/services/order.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  products: ProductModel[];

  constructor(
    private productService: ProductService,
    private orderService: OrderService
  ) {
  }

  ngOnInit() {
    this.products = this.productService.getProducts();
  }

  onBuyClick(product: ProductModel) {
    this.orderService.addProduct(product);
  }

}
