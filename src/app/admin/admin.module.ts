import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ManageProductsComponent } from './components/manage-products/manage-products.component';
import { AdminRoutingModule } from './admin-routing.module';
import { AdminComponent } from './admin.component';

@NgModule({
  declarations: [ManageProductsComponent, AdminComponent],
  imports: [
    CommonModule,
    AdminRoutingModule
  ]
})
export class AdminModule { }
