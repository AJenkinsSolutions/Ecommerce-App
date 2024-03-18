import { Routes } from '@angular/router';
import { CounterComponent } from './pages/counter/counter.component';

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
    }
];
