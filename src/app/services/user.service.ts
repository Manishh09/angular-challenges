import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { delay, Observable } from 'rxjs';

// STEP 4: Create a user service to get users from jsonplaceholder api
@Injectable({
  providedIn: 'root'
})
export class UserService {

  #URL = 'https://jsonplaceholder.typicode.com/users';

  // inject httpClient using inject function
  #httpClient = inject(HttpClient);

  // create a method to get users from jsonplaceholder api

  getUsers(): Observable<any[]> {
    // return httpClient get method with url and response type as json
    return this.#httpClient.get<any[]>(this.#URL, { responseType: 'json' });
  }
}
