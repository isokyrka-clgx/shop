import { Pipe, PipeTransform } from '@angular/core';
import { CartService } from 'src/app/cart/services/order.service';
import { ProductModel } from 'src/app/product/models/product.model';

@Pipe({
  name: 'orderBy'
})
export class OrderByPipe implements PipeTransform {

  constructor(private orderService: CartService) {
  }

  transform(value: any, columnName: string, asc: boolean): ProductModel[] {
    if (asc)
      return this.sortByColumnNameAsc(columnName);
    else
      return this.sortByColumnNameDesc(columnName);
  }

  private sortByColumnNameAsc(columnName: string): ProductModel[] {
    switch (columnName) {
      case 'price':
        return this.orderService.getSelectedProducts().sort((a, b) => {
          if (a.price > b.price) {
            return 1;
          } else if (a.price < b.price) {
            return -1;
          }
          return 0;
        });
      case 'name':
        return this.orderService.getSelectedProducts().sort((a, b) => {
          if (a.name > b.name) {
            return 1;
          } else if (a.name < b.name) {
            return -1;
          }
          return 0;
        });
    }
    return null;
  }

  private sortByColumnNameDesc(columnName: string): ProductModel[] {
    switch (columnName) {
      case 'price':
        return this.orderService.getSelectedProducts().sort((a, b) => {
          if (a.price < b.price) {
            return 1;
          } else if (a.price > b.price) {
            return -1;
          }
          return 0;
        });
      case 'name':
        return this.orderService.getSelectedProducts().sort((a, b) => {
          if (a.name < b.name) {
            return 1;
          } else if (a.name > b.name) {
            return -1;
          }
          return 0;
        });
    }
    return null;
  }
}
