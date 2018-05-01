import { Component, Input } from "@angular/core";
import { AuthenticationService } from "../auth/splash/auth.service";

@Component({
    selector: 'app-navbar',
    templateUrl: './navbar.component.html',
    styleUrls: ['./navbar.component.css']
})

export class NavbarComponent {
  constructor(private AuthenticationService: AuthenticationService) {}

  isLoggedIn() {
    return this.AuthenticationService.isLoggedIn();
  }
}
