import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProductListComponent } from './product/components/product-list/product-list.component';
import { CartListComponent } from './cart/components/cart-list/cart-list.component';
import { PageNotFoundComponent } from './page-not-found/components/page-not-found/page-not-found.component';
const routes: Routes = [
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
        // The router will match this route if the URL requested
        // doesn't match any paths for routes defined in our configuration
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