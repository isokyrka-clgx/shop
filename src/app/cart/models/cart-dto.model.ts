import { ProductModel } from 'src/app/product/models/product.model';

export class CartDTOModel {
  constructor(
    public product: ProductModel,
    public quantity: number
  ) { }
}
