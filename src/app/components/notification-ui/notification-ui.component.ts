import { Component, Inject, ViewEncapsulation } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MAT_SNACK_BAR_DATA, MatSnackBarModule, MatSnackBarRef } from '@angular/material/snack-bar';
import { MatIconModule } from '@angular/material/icon';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-notification-ui',
  standalone: true,
  imports: [MatSnackBarModule, MatButtonModule, MatIconModule, CommonModule],
  templateUrl: './notification-ui.component.html',
  styleUrl: './notification-ui.component.scss',
 })
export class NotificationUiComponent {
  constructor(
    @Inject(MAT_SNACK_BAR_DATA) public data: { message: string, action: string },
    public snackBarRef: MatSnackBarRef<NotificationUiComponent>
  ) {}

  // Helper method to determine icon based on CSS class
  getIcon(): string {
    const classes = this.snackBarRef.containerInstance.snackBarConfig.panelClass;
    if (Array.isArray(classes)) {
      if (classes.includes('notification-success')) return 'check_circle';
      if (classes.includes('notification-error')) return 'error';
      if (classes.includes('notification-warning')) return 'warning';
      if (classes.includes('notification-info')) return 'info';
    }
    return 'notifications';
  }

  // Close the snackbar
  dismiss(): void {
    this.snackBarRef.dismiss();
  }
}
