import { inject, Injectable } from '@angular/core';
import { MatSnackBar, MatSnackBarHorizontalPosition, MatSnackBarVerticalPosition } from '@angular/material/snack-bar';
import { Notification } from '../interfaces/notification';
import { NotificationUiComponent } from '../components/notification-ui/notification-ui.component';
import { NotificationType } from '../enums/notification-type';
import { NotificationDuration } from '../enums/notification-duration';

@Injectable({
  providedIn: 'root'
})
export class NotificationService {

  // inject snackbar using new inject function
  #snackBar = inject(MatSnackBar);

  // Method for simple toast notifications using MatSnackBar
  /**
  * Displays a toast notification using Angular Material's snackbar component.
  * 
  * @param notification - The notification configuration object
  * @param notification.message - The text message to display in the toast
  * @param notification.duration - The duration in milliseconds to show the toast (defaults to 3000ms)
  * @param notification.action - The action button text (defaults to 'Close')
  * @param notification.type - The notification type used for styling via the 'notification-{type}' CSS class
  * 
  * @remarks
  * The toast is positioned at the top-right corner of the screen by default.
  * CSS classes are dynamically applied based on the notification type for styling purposes.
  */
  showToast(notification: Notification): void {
    const { message, duration = 3000, action = 'Close', type } = notification;
    const snackBarConfig = {
      duration,
      panelClass: [`notification-${type}`],
      horizontalPosition: 'center' as MatSnackBarHorizontalPosition,
      verticalPosition: 'top' as MatSnackBarVerticalPosition
    }
    this.#snackBar.open(message, action, snackBarConfig);
  }

  // Method for displaying notifications with a custom component
  /**
   * Displays a custom toast notification using the Angular Material snackbar.
   * 
   * @param notification - The notification configuration object
   * @param notification.message - The text message to display in the notification
   * @param notification.duration - Duration in milliseconds to show the notification (defaults to 3000ms)
   * @param notification.action - Text for the action button (defaults to 'Close')
   * @param notification.type - The notification type that determines the CSS class applied
   * 
   * @remarks
   * The notification is positioned at the top-right corner of the screen.
   * The CSS class applied will be in the format `notification-${type}`.
   */
  showCustomToast(notification: Notification): void {
    const { message, duration = 3000, action = 'Close', type } = notification;
    const snackBarConfig = {
      data: { message, action },
      panelClass: [`notification-${type}`],
      horizontalPosition: 'center' as MatSnackBarHorizontalPosition,
      verticalPosition: 'top' as MatSnackBarVerticalPosition
    };

    // Use undefined for action parameter to prevent duplicate buttons
    this.#snackBar.openFromComponent(NotificationUiComponent, snackBarConfig);
  }


  /**
   * Displays a success notification with medium duration.
   * 
   * @param message - The text message to be displayed in the notification
   * @returns void
   */
  showSuccessNotification(message: string): void {
    this.showToast({ message, type: NotificationType.Success, duration: NotificationDuration.Medium });
  }

  /**
  * Displays a failure / error notification with long duration.
  * 
  * @param message - The text message to be displayed in the notification
  * @returns void
  */
  showErrorNotification(message: string, duration: number = 5000): void {
    this.showToast({ message, type: NotificationType.Error, duration: NotificationDuration.Long });
  }

  /**
  * Displays an info notification with short duration.
  * 
  * @param message - The text message to be displayed in the notification
  * @returns void
  */
  showInfoNotification(message: string): void {
    this.showToast({ message, type: NotificationType.Info, duration: NotificationDuration.Short });
  }

  /**
  * Displays a warning notification with medium duration.
  * 
  * @param message - The text message to be displayed in the notification
  * @returns void
  */
  showWarningNotification(message: string): void {
    this.showToast({ message, type: NotificationType.Warning, duration: NotificationDuration.Medium });
  }

}
