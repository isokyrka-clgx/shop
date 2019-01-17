import {Component} from '@angular/core';
import {ProductModel} from '../../models/product';
import {MatTableDataSource} from '@angular/material';
import {SelectionModel} from '@angular/cdk/collections';
import {ProductService} from '../../services/product.service';

@Component({
  selector: 'app-product-component',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent {

  constructor(private productService: ProductService) {
  }

  displayedColumns: string[] = ['select', 'name', 'description', 'price', 'isAvailable'];
  dataSource = new MatTableDataSource<ProductModel>(this.productService.getProducts());
  selection = new SelectionModel<ProductModel>(true, []);

  isAllSelected() {
    const numSelected = this.selection.selected.length;
    const numRows = this.dataSource.data.length;
    return numSelected === numRows;
  }

  masterToggle() {
    this.isAllSelected() ?
      this.selection.clear() :
      this.dataSource.data.forEach(row => this.selection.select(row));
  }

  onBuyButtonClick() {
    console.log(this.selection.selected);
  }
}
