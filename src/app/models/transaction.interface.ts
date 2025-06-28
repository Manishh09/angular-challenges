export interface Transaction {
    id: string;
    date: string; // e.g., "2024-06-25"
    description: string;
    amount: number;
    type: 'debit' | 'credit';
}

export type TransactionType = 'all' | 'debit' | 'credit';
