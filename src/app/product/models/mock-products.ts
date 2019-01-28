import { ProductModel } from './product.model';
import { Category } from './category.enum';

export const MockProducts: ProductModel[] = [
  new ProductModel('One', 'Lorem ipsum dolor sit amet.', 1, Category.NEW, true),
  new ProductModel('Two', 'Lorem ipsum dolor sit amet.', 2, Category.SALE, true),
  new ProductModel('Three', 'Lorem ipsum dolor sit amet.', 3, Category.EOL, false),
  new ProductModel('Four', 'Lorem ipsum dolor sit amet.', 4, Category.NEW, true)
];
