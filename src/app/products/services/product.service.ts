import {Injectable} from '@angular/core';
import {ProductModel} from '../models/product';
import {MockProducts} from '../models/mock-products';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  getProducts(): ProductModel[] {
    return MockProducts;
  }

  getColumns(): string[] {
    return ['Name', 'Description', 'Price', 'Category', 'Availability'];
  }
}
