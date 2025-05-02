# Designing a Notification System 

## Overview
This guide outlines how to create a notification system in Angular 17 using Angular Material components.

## Prerequisites
- Angular 17 installed
- Angular Material installed
- Basic knowledge of Angular and TypeScript

## Steps

1. Create a Notification Service 
2. Create a Notification UI Component
3. Create Required Types / Interfaces / Enums for better Type Safety
4. Use MatSnackBar components

## Summary

The notification system works by combining a central service with UI components:

1. The **Notification Service** acts as the core, managing notification state and behavior.
2. The **UI Component** displays notifications with customizable appearance and actions.
3. **Types/Interfaces/Enums** provide structure and type safety throughout the system.
4. **MatSnackBar** delivers lightweight, temporary notifications that appear and disappear automatically.

When implemented, this system allows your application to:
- Display success, error, warning, and info notifications
- Customize notification duration and appearance
- Trigger notifications from any component
- Maintain consistent notification styling
- Provide interactive elements (like dismiss buttons) when needed