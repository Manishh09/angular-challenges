import { Injectable, signal } from '@angular/core';


// STEP1: Create LoadingService
@Injectable({
  providedIn: 'root'
})
export class LoadingService {
  
  
  // create a private signal loadingSignal using signal
  #loadingSignal = signal(false);
  
  // create a readonly signal loading using signal
  loading = this.#loadingSignal.asReadonly();

  // create a method to set loading signal to true
  setLoading() {
    this.#loadingSignal.set(true);
  }

  // create a method to set loading signal to false
  unsetLoading() {
    this.#loadingSignal.set(false);
  }

}
