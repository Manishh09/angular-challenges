import { Injectable } from '@angular/core';
import { Transaction } from '../models/transaction.interface';
import { Observable } from 'rxjs/internal/Observable';

@Injectable({
  providedIn: 'root'
})
export class TransactionService {
  private sampleTransactions: Transaction[] = [
    {
      id: 'TRX001',
      date: '2025-06-28',
      description: 'Monthly Salary',
      amount: 5000.00,
      type: 'credit'
    },
    {
      id: 'TRX002',
      date: '2025-06-27',
      description: 'Rent Payment',
      amount: 1200.00,
      type: 'debit'
    },
    {
      id: 'TRX003',
      date: '2025-06-26',
      description: 'Grocery Shopping',
      amount: 150.75,
      type: 'debit'
    },
    {
      id: 'TRX004',
      date: '2025-06-25',
      description: 'Freelance Payment',
      amount: 800.00,
      type: 'credit'
    },
    {
      id: 'TRX005',
      date: '2025-06-25',
      description: 'Internet Bill',
      amount: 79.99,
      type: 'debit'
    },
    {
      id: 'TRX006',
      date: '2025-06-24',
      description: 'Client Project Payment',
      amount: 2500.00,
      type: 'credit'
    },
    {
      id: 'TRX007',
      date: '2025-06-24',
      description: 'Restaurant Dinner',
      amount: 85.50,
      type: 'debit'
    },
    {
      id: 'TRX008',
      date: '2025-06-23',
      description: 'Gas Station',
      amount: 45.00,
      type: 'debit'
    }
  ];

  getTransactions(): Transaction[] {
    return this.sampleTransactions;
  }
}
