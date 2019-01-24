import {ProductModel} from './product.model';
import {Category} from './category.enum';

export const MockProducts: ProductModel[] = [
  {
    'name': 'One',
    'description': 'One',
    'price': 1,
    'category': Category.NEW,
    'isAvailable': true
  },
  {
    'name': 'Two',
    'description': 'Two',
    'price': 2,
    'category': Category.EOL,
    'isAvailable': false
  },
  {
    'name': 'Three',
    'description': 'Three',
    'price': 3,
    'category': Category.NEW,
    'isAvailable': true
  },
  {
    'name': 'Four',
    'description': 'Four',
    'price': 4,
    'category': Category.SALE,
    'isAvailable': true
  },
  {
    'name': 'Five',
    'description': 'Five',
    'price': 5,
    'category': Category.NEW,
    'isAvailable': true
  }
];
