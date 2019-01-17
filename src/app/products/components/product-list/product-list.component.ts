import {Component, OnInit} from '@angular/core';
import {ProductService} from '../../services/product.service';
import {ProductModel} from '../../models/product';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  products: ProductModel[];
  columns: string[];

  constructor(private productService: ProductService) {
  }

  ngOnInit() {
    this.products = this.productService.getProducts();
    this.columns = this.productService.getColumns();
  }

}
