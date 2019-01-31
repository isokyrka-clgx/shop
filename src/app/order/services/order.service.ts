import { Injectable } from '@angular/core';
import { ProductModel } from 'src/app/product/models/product.model';

@Injectable({
  providedIn: 'root'
})
export class OrderService {

  private orderedProducts: ProductModel[];

  constructor() {
    this.orderedProducts = [];
  }

  getSelectedProducts() {
    return this.orderedProducts;
  }

  addProduct(product: ProductModel) {
    var value = this.orderedProducts.find(p => p.id === product.id);
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

  getTotalPrice(): number {
     return this.orderedProducts.reduce(
       (acc, p) => acc += p.price, 
       0
    );
  }

}
