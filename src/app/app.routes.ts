import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { TransactionListComponent } from './components/transaction-list/transaction-list.component';

export const routes: Routes = [
    {
        path: '',
        component: HomeComponent
    },
    {
        path: 'transactions',
        component: TransactionListComponent
    }
];
