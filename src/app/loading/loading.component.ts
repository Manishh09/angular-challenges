import { Component, inject } from '@angular/core';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { LoadingService } from '../services/loading.service';

// STEP 3: Create a loading component to handle loading UI Styles
@Component({
  selector: 'app-loading',
  standalone: true,
  // import MatSpinnerModule, MatProgressBarModule in the imports array
  imports: [MatProgressSpinnerModule, MatProgressBarModule],
  templateUrl: './loading.component.html',
  styleUrl: './loading.component.scss'
})
export class LoadingComponent {
  // inject loading service
  #loadingService = inject(LoadingService);

  // get loading signal from loading service 
  // and create a loading signal using loading service
  isLoading = this.#loadingService.loading; // get loading signal from loading service
}
