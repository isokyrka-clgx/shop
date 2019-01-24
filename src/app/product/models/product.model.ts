import {Category} from './category.enum';

export class ProductModel {

  constructor(public name: string,
              public description: string,
              public price: number,
              public category?: Category,
              public isAvailable?: boolean
  ) {
    this.category = category || Category.NEW;
    this.isAvailable = isAvailable || false;
  }
}
