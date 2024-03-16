import { Routes } from '@angular/router';
import { CounterComponent } from './pages/counter/counter.component';

export const routes: Routes = [
    {
        path: '',
        redirectTo: 'counter',
        pathMatch: 'full'
    },
    {
        path: 'counter',
        loadComponent: () => import('./pages/counter/counter.component').then(a => a.CounterComponent)
    }
];
