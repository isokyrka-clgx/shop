import { Injectable } from '@angular/core';
import { ProductModel } from 'src/app/product/models/product.model';

@Injectable({
  providedIn: 'root'
})
export class OrderService {

  private orderedProducts: Array<ProductModel>

  constructor() {
    this.orderedProducts = new Array;
  }

  getSelectedProducts() {
    return this.orderedProducts;
  }

  addProduct(product: ProductModel) {
    var value = this.orderedProducts.find(p => p.id == product.id);
    if (!value) {
      this.orderedProducts.push(product);
    }
  }

  removeProduct(product: ProductModel) {
    var index = this.orderedProducts.indexOf(product);
    this.orderedProducts.splice(index, 1);
  }

  getQuantity() {
    return this.orderedProducts.length;
  }

  getTotalPrice() {
    const result = 0;
    this.orderedProducts.forEach(p => result + p.price);
    return result;
  }

}
