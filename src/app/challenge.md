# Challenge - Asynchronous Data Fetching and Display

## Challenge Description

This challenge requires you to build an Angular application that effectively handles asynchronous data fetching from a REST API, manages loading states, displays data upon success, and gracefully handles errors. The solution should leverage modern Angular and RxJS patterns, specifically utilizing the async pipe for streamlined state management.

## Requirements

Your Angular application must meet the following criteria

### API Integration

- On application initialization, use an Angular service to perform an HTTP GET request to a specified REST API endpoint.
- Example Endpoint [https//jsonplaceholder.typicode.com/posts](https//jsonplaceholder.typicode.com/posts)

### Loading Indicator

- Display a clear "Loading..." indicator or a visual spinner while the data is being fetched from the API.
- This indicator should be visible until the data is successfully loaded or an error occurs.

### Data Rendering

- Upon successful retrieval of data from the API, render the data in a clean, readable, and well-structured format.
- Example Data If using the posts endpoint, display a list of post titles and their corresponding bodies.

### Error Handling

- Implement robust error handling for API requests.
- If the HTTP GET request fails for any reason (e.g., network error, server error), display an appropriate and user-friendly error message to the user.
- Example Error Message "Failed to load data. Please try again later."

### Data Refresh Functionality

- Include a prominent "Refresh Data" button within the application.
- When this button is clicked, it must re-initiate the data fetching process from the API.
- During the re-fetch, the loading indicator must be displayed again, covering the existing data until the new data is available or an error state is entered.

## Technical Considerations

- **Angular Version** Use a recent stable version of Angular.
- **RxJS** Leverage RxJS operators (e.g., `switchMap`, `map`, `catchError`, `startWith`, `BehaviorSubject`) for effective stream manipulation and state management.
- **Angular CLI** The project should be set up using the Angular CLI.
- **TypeScript** All code must be written in TypeScript, adhering to good typing practices.
- **Code Structure** Maintain a clean and logical project structure (e.g., separate service for API calls, well-defined components).

### Advavnced:  Implement Reactive State Management with Async Pipe for the same challenge

#### Description

- Crucially, the core logic for managing the data fetching lifecycle (loading, success, error states) should be encapsulated within a single RxJS Observable stream.
- The component's template must consume this Observable stream using Angular's async pipe. Manual subscriptions (`.subscribe()`) within the component's TypeScript file for this data flow are not permitted, ensuring automatic subscription management and prevention of memory leaks.