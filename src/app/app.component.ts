import { Component } from '@angular/core';
import { AuthenticationService } from './_services';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'HerritageApp';

  constructor(public auth: AuthenticationService) {
    auth.handleAuthentication();
  }
}
