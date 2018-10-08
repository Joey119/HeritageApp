import { Component, OnInit } from '@angular/core';
import { first } from 'rxjs/operators';

import { IUser } from '../_models';
import { UserService } from '../_services';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.scss']
})
export class WelcomeComponent implements OnInit {
  currentUser: IUser;
  users: IUser[] = [];

  constructor(private userService: UserService) {
    this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
   }

  ngOnInit() {}

}
