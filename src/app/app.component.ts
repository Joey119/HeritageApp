import { Component } from '@angular/core';
import { MatIconRegistry } from "@angular/material/icon";
import { DomSanitizer } from "@angular/platform-browser";
import { AuthenticationService } from './_services';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'HerritageApp';

  constructor(public auth: AuthenticationService,
    private matIconRegistry: MatIconRegistry,
    private domSanitizer: DomSanitizer
    ) {
    auth.handleAuthentication();
    this.matIconRegistry.addSvgIcon(
      "buu_icon",
      this.domSanitizer.bypassSecurityTrustResourceUrl("../assets/icons/buu.svg")
    );
  }
}
