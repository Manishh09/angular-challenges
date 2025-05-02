export interface Notification {
    message: string;
    type: 'success' | 'error' | 'info' | 'warning';
    action?: string; // Optional action button text
    // Optional duration for the notification display, in milliseconds.
    duration?: number;
}
