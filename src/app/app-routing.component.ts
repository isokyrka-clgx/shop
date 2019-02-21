import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProductListComponent } from './product/components/product-list/product-list.component';
import { CartListComponent } from './cart/components/cart-list/cart-list.component';
import { PageNotFoundComponent } from './page-not-found/components/page-not-found/page-not-found.component';

import { AuthGuard } from './core';

const routes: Routes = [
    {
        path: 'admin',
        canLoad: [AuthGuard],
        loadChildren: './admin/admin.module#AdminModule',
        data: { title: 'Admin' }
    },
    {
        path: 'products-list',
        component: ProductListComponent
    },
    {
        path: 'cart',
        component: CartListComponent
    },
    {
        path: '',
        redirectTo: '/products-list',
        pathMatch: 'full'
    },
    {
        path: '**',
        component: PageNotFoundComponent
    }
];
@NgModule({
    imports: [
        RouterModule.forRoot(routes)
    ],
    exports: [RouterModule]
})
export class AppRoutingModule { }