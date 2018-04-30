import { Component } from "@angular/core";
import { AuthenticationService } from "./auth.service";

@Component({
    selector: 'app-authentication',
    templateUrl: './splash.component.html',
    styleUrls: ['./splash.component.css']
})
export class AuthenticationComponent {
    constructor(private AuthenticationService: AuthenticationService) {}

    isLoggedIn() {
        return this.AuthenticationService.isLoggedIn();
    }
}
