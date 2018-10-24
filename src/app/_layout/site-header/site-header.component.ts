import { Component, OnInit } from '@angular/core';
import { AuthenticationService, UserService } from '../../_services';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'site-header',
  templateUrl: './site-header.component.html',
  styleUrls: ['./site-header.component.scss']
})
export class SiteHeaderComponent implements OnInit {
  title = 'HerritageApp';
  options: FormGroup;

  constructor(public auth: AuthenticationService,
    public usr: UserService,
    fb: FormBuilder) {
    auth.handleAuthentication();
    this.options = fb.group({
      bottom: 0,
      fixed: true,
      top: 0
    });
  }

  ngOnInit() {
  }

  isAdmin() {
    if (this.auth.isAuthenticated() && this.usr.isAdmin()) {
      return true;
    }
    else {
      return false;
    }
  }

  canEdit() {
    if (this.auth.isAuthenticated() && this.usr.canEdit()) {
      return true;
    }
    else {
      return false;
    }
  }

  isReadOnly() {
    if (this.auth.isAuthenticated() && this.usr.isReadOnly()) {
      return true;
    }
    else {
      return false;
    }
  }

}