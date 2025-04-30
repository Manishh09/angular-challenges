import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: '',
        redirectTo: 'users',
        pathMatch: 'full',
    },
    {
        path: 'users',
        loadComponent: () => import('./loading-system-demo/loading-system-demo.component').then(m => m.LoadingSystemDemoComponent),
        title: 'Loading System Demo',
    }
];
