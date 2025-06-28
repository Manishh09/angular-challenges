# Challenge: "Financial Transaction Filter"

## Scenario

You are working on a banking application where users need to view their financial transactions. The backend provides a list of transactions, and you need to display them in an Angular component with filtering capabilities.

## Task

Create an Angular component named `TransactionListComponent` that fulfills the following requirements:

### Display Transactions

- The component should receive an array of Transaction objects as an `@Input()` / input signal property.
- If input is not povided initialize with sample data
- Each Transaction object has the following structure:

```typescript
interface Transaction {
    id: string;
    date: string; // e.g., "2024-06-25"
    description: string;
    amount: number;
    type: 'debit' | 'credit'; // Can be "debit" or "credit"
}
```

- Render a list of transactions, displaying id, date, description, amount, and type for each.

### Filter by Type

- Add a dropdown (`select`) or a set of radio buttons to allow the user to filter transactions by type ('all', 'debit', 'credit').
- When a filter is selected, only transactions matching that type should be displayed. "All" should show all transactions.

### Search by Description

- Add an input field (`input type="text"`) for users to search transactions by description.
- The search should be case-insensitive.
- The filtering should be reactive: as the user types, the list should update immediately (with a debounce to prevent excessive updates).

### Combine Filters

- Both the type filter and the search filter should work together. For example, if the user selects 'debit' and searches for "rent", only debit transactions with "rent" in their description should be shown.

## Constraints

- Use Reactive Forms for the search input.
- Utilize RxJS operators for debouncing the search input and combining multiple filter streams.
- Ensure the component is well-structured and uses Angular best practices.
- Styling is not a primary concern, but the layout should be functional.
