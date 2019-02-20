import { Component, OnInit, OnDestroy } from '@angular/core';

import { ActivatedRoute, Params, Router } from '@angular/router';

import { switchMap } from 'rxjs/operators';
import { ProductModel } from '../../models/product.model';
import { ProductService } from '../../services/product.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit, OnDestroy {
  product: ProductModel;
  id: number;
  private sub: any;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private productService: ProductService
  ) { }

  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
      this.id = +params['productID'];
      this.product = this.productService.getProductById(this.id);
    });
  }

  onClick() {
    this.router.navigate(['/products-list']);
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }

}
