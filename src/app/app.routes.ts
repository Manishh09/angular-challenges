import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: '',
        redirectTo: 'demo',
        pathMatch: 'full'
    },
    {
        path: 'demo',
        loadComponent: () => import('./components/notification-system-demo/notification-system-demo.component').then(m => m.NotificationSystemDemoComponent)
    }
];
