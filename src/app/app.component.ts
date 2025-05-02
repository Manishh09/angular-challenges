import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NotificationSystemDemoComponent } from './components/notification-system-demo/notification-system-demo.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, MatButtonModule, NotificationSystemDemoComponent, MatToolbarModule],
   templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'angular-challenges';
}
