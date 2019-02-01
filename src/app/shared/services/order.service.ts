import { Injectable } from '@angular/core';
import { ProductModel } from 'src/app/product/models/product.model';
import { CartDTOModel } from 'src/app/cart/models/cart-dto.model';

@Injectable({
  providedIn: 'root'
})
export class OrderService {

  private orderedProducts: Map<ProductModel, number>;

  constructor() {
    this.orderedProducts = new Map;
  }

  getSelectedProducts() {
    return Array.from(this.orderedProducts.keys());
  }

  addProduct(product: ProductModel) {
    this.orderedProducts.set(product, 1);
  }

  updateQuantity(cartDTO: CartDTOModel) {
    this.orderedProducts.set(cartDTO.product, cartDTO.quantity);
  }

  removeProduct(product: ProductModel) {
    this.orderedProducts.delete(product);
  }

  getQuantity() {
    return this.orderedProducts.size;
  }

  getTotalPrice(): number {
    let result = 0;
    this.orderedProducts.forEach((value, key) => result += key.price * value);
    return result;
  }

}
