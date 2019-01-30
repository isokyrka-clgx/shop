import { ProductModel } from './product.model';
import { Category } from './category.enum';

export const MockProducts: ProductModel[] = [
  new ProductModel(1, 'One', 'Lorem ipsum dolor sit amet.', 1, Category.NEW, true),
  new ProductModel(2, 'Two', 'Lorem ipsum dolor sit amet.', 2, Category.SALE, true),
  new ProductModel(3, 'Three', 'Lorem ipsum dolor sit amet.', 3, Category.EOL, false),
  new ProductModel(4, 'Four', 'Lorem ipsum dolor sit amet.', 4, Category.NEW, true)
];
