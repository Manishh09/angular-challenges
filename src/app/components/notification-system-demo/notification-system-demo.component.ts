import { Component, inject, OnInit } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatListModule } from '@angular/material/list';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';
import { MatTabsModule } from '@angular/material/tabs';
import { MatDividerModule } from '@angular/material/divider';
import { MatChipsModule } from '@angular/material/chips';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';

import { FormBuilder, FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { NotificationService } from '../../services/notification.service';
import { NotificationType } from '../../enums/notification-type';
import { NotificationDuration } from '../../enums/notification-duration';

@Component({
  selector: 'app-notification-system-demo',
  standalone: true,  imports: [
    MatCardModule,
    MatFormFieldModule,
    MatSelectModule,
    MatButtonModule,
    MatIconModule,
    MatSnackBarModule,
    MatListModule,
    MatTabsModule,
    MatDividerModule,
    MatChipsModule,
    MatTooltipModule,
    MatSlideToggleModule,
    ReactiveFormsModule,
    FormsModule,
    CommonModule,
    MatInputModule
  ],
  templateUrl: './notification-system-demo.component.html',
  styleUrl: './notification-system-demo.component.scss',
})
export class NotificationSystemDemoComponent implements OnInit {
  // Inject NotificationService
  private notificationService = inject(NotificationService);
  private fb = inject(FormBuilder);

  // Form for custom notifications
  customNotificationForm!: FormGroup;
  
  // Notification types for dropdown
  notificationTypes = Object.values(NotificationType);
  
  // Notification durations for dropdown
  notificationDurations = [
    { value: NotificationDuration.Short, label: 'Short (3s)' },
    { value: NotificationDuration.Medium, label: 'Medium (4s)' },
    { value: NotificationDuration.Long, label: 'Long (5s)' },
    { value: 10000, label: 'Extra Long (10s)' }
  ];

  ngOnInit(): void {
    this.initializeForm();
  }

  private initializeForm(): void {
    this.customNotificationForm = this.fb.group({
      message: ['Notification message example', [Validators.required, Validators.minLength(3)]],
      type: [NotificationType.Success, Validators.required],
      duration: [NotificationDuration.Medium, Validators.required],
      action: ['Close'],
      useCustomComponent: [false]
    });
  }

  // Predefined notification methods
  showSuccessNotification(): void {
    this.notificationService.showSuccessNotification('Operation completed successfully!');
  }
  
  showErrorNotification(): void {
    this.notificationService.showErrorNotification('An error occurred while processing your request.');
  }
  
  showInfoNotification(): void {
    this.notificationService.showInfoNotification('Here is some information you might find useful.');
  }
  
  showWarningNotification(): void {
    this.notificationService.showWarningNotification('Please be cautious with this action.');
  }

  // Show custom notification based on form values
  showCustomNotification(): void {
    if (this.customNotificationForm.valid) {
      const { message, type, duration, action, useCustomComponent } = this.customNotificationForm.value;
      
      if (useCustomComponent) {
        this.notificationService.showCustomToast({
          message,
          type,
          duration,
          action
        });
      } else {
        this.notificationService.showToast({
          message,
          type,
          duration,
          action
        });
      }
    }
  }

  // Reset form to default values
  resetForm(): void {
    this.initializeForm();
  }

  // Get the icon for a notification type
  getNotificationIcon(type: NotificationType): string {
    switch (type) {
      case NotificationType.Success:
        return 'check_circle';
      case NotificationType.Error:
        return 'error';
      case NotificationType.Info:
        return 'info';
      case NotificationType.Warning:
        return 'warning';
      default:
        return 'notifications';
    }
  }
}
