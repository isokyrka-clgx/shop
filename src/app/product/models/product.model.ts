import { Category } from './category.enum';

export class ProductModel {

  constructor(
    public id: number = null,
    public name: string = null,
    public description: string = null,
    public price: number = 0,
    public category?: Category,
    public isAvailable?: boolean
  ) {
    this.category = category || Category.NEW;
    this.isAvailable = isAvailable || false;
  }
}
