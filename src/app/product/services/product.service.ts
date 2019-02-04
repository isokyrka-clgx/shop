import { Injectable } from '@angular/core';
import { ProductModel } from '../models/product.model';
import { MockProducts } from '../models/mock-products';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  getProducts(): ProductModel[] {
    return MockProducts;
  }

  getProductById(id: number) {
    return MockProducts.find(p => p.id === id);
  }
}
