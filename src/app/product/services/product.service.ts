import { Injectable } from '@angular/core';
import { ProductModel } from '../models/product.model';
import { MockProducts } from '../models/mock-products';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  getProducts(): Promise<ProductModel[]> {

    return <Promise<ProductModel[]>>new Promise((resolve) => {
      setTimeout(() => {
        resolve(MockProducts);
      }, 1000);
    }).catch(error => error);
  }

  getProductById(id: number) {
    return MockProducts.find(p => p.id === id);
  }
}
