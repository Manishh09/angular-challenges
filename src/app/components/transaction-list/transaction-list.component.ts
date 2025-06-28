import { AsyncPipe, CommonModule } from '@angular/common';
import { Component, inject, Input, OnInit } from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { combineLatest, debounceTime, distinctUntilChanged, map, Observable, startWith, Subject, takeUntil } from 'rxjs';
import { TransactionService } from '../../services/transaction.service';
import { Transaction, TransactionType } from '../../models/transaction.interface';

@Component({
    selector: 'app-transaction-list',
    standalone: true,
    imports: [CommonModule, ReactiveFormsModule, AsyncPipe],
    templateUrl: './transaction-list.component.html',
    styleUrls: ['./transaction-list.component.scss']
})
export class TransactionListComponent implements OnInit {
    @Input() transactions: Transaction[] = [];

    // Form controls for filters
    // Search filter control
    searchControl = new FormControl('');

    // Type filter control
    typeControl = new FormControl<TransactionType>('all');

    // Observable for filtered transactions
    filteredTransactions$?: Observable<Transaction[]>;

    // Subject to manage unsubscription
    private destroy$ = new Subject<void>();

    // inject TransactionService
    private transactionService = inject(TransactionService);

    ngOnInit():void {
        // Load sample data if no transactions are provided via Input
        this.transactions = this.transactionService.getTransactions();
        // Implement filtering logic here using RxJS and combineLatest
        // Hint: Use searchControl.valueChanges, typeFilterControl.valueChanges,
        // and the initial 'transactions' input.
        // Remember to debounce the search input.

        // Create observables for search filter
        const search$ = this.searchControl.valueChanges.pipe(
            startWith(''), // Emit initial empty string
            debounceTime(300), // Wait for 300ms after last keystroke
            distinctUntilChanged(), // Only emit if value has changed
            map(searchText => (searchText || '').toLowerCase()), // Ensure lowercase for case-insensitive search
        );

        // Create observables for type filter
        const typeFilter$ = this.typeControl.valueChanges.pipe(
            startWith('all') // Emit initial 'all'
        );

        // Combine both filters
        this.filteredTransactions$ = combineLatest([search$, typeFilter$])
            .pipe(
                map(([searchText, typeFilter]) => {
                    return this.transactions.filter(transaction => {
                        const matchesSearch = transaction.description.toLowerCase().includes(searchText);
                        const matchesType = typeFilter === 'all' || transaction.type === typeFilter;
                        return matchesSearch && matchesType;
                    });
                }),
                takeUntil(this.destroy$) // Unsubscribe on component destroy
            );

        // Initialize with default values
        this.filteredTransactions$ = this.filteredTransactions$ || new Observable<Transaction[]>();
    }

    // Cleanup subscriptions
    ngOnDestroy() {
        this.destroy$.next();
        this.destroy$.complete();
    }

}
