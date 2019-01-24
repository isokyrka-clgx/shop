import {ProductModel} from './product.model';
import {Category} from './category.enum';

export const MockProducts: ProductModel[] = [
  new ProductModel('One', 'One', 1, Category.NEW, true),
  new ProductModel('Two', 'Two', 2, Category.SALE, true),
  new ProductModel('Three', 'Three', 3, Category.EOL, false),
  new ProductModel('Four', 'Four', 4, Category.NEW, true)
];
