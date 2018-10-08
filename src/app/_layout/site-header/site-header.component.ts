import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../../_services';
import {FormBuilder, FormGroup} from '@angular/forms';

@Component({
  selector: 'site-header',
  templateUrl: './site-header.component.html',
  styleUrls: ['./site-header.component.scss']
})
export class SiteHeaderComponent implements OnInit {
    title = 'HerritageApp';
    options: FormGroup;

  constructor(public auth: AuthenticationService,
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

}