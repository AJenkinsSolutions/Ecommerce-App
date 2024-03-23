import { Routes } from '@angular/router';


export const routes: Routes = [
    {
        path: '',
        redirectTo: 'products',
        pathMatch: 'full'
    },
    {
        path: 'counter',
        loadComponent: () => import('./pages/counter/counter.component').then(a => a.CounterComponent)
    }, 
    {
        path: 'products',
        loadComponent: () => import('./pages/product-list/product-list.component').then(a => a.ProductListComponent)
    },
    {
        path: 'cart',
        loadComponent: () => import('./pages/cart/cart.component').then(a => a.CartComponent)
    },
    {
        path: 'products/:productId',
        loadComponent: () => import('./pages/product-details/product-details.component').then(a => a.ProductDetailsComponent)
    },
    {
        path: 'checkout',
        loadComponent: () => import('./pages/checkout/checkout.component').then(a => a.CheckoutComponent)
    },
    {
        path: 'order',
        loadComponent: () => import('./pages/order-summary/order-summary.component').then(a => a.OrderSummaryComponent)
    }
];
