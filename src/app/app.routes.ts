import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';

export const routes: Routes = [
    {
        path: '',
        pathMatch: 'full',
        component: HomeComponent
    },

    {
        path: 'loading-system',
        loadComponent: () => import('./loading-system-demo/loading-system-demo.component').then(m => m.LoadingSystemDemoComponent),
        title: 'Loading System Demo',
    },
    {
        path: '**',
        redirectTo: '/',
        pathMatch: 'full',
        title: 'Home',

    }

];
