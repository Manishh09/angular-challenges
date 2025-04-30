import { Component, inject, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';
import { delay } from 'rxjs';

// STEP 5: Create a loading system demo component to show loading spinner when API is called
@Component({
  selector: 'app-loading-system-demo',
  standalone: true,
  imports: [],
  templateUrl: './loading-system-demo.component.html',
  styleUrl: './loading-system-demo.component.scss'
})
export class LoadingSystemDemoComponent implements OnInit {

  // inject UserService
  #userService = inject(UserService);

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    // get user list from UserService
    this.getUserList();
  }

  // subscribe Users data from UserService
  getUserList() {
    this.#userService.getUsers().subscribe((data) => {
      console.log(data);
    });
  }

}
