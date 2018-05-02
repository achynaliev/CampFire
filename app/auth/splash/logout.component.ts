import { Component } from "@angular/core";
import { Router } from "@angular/router";

import { AuthenticationService } from "./auth.service";

@Component({
    selector: 'app-logout',
    template: `<a style="color: white; font-size: 18px; font-family: 'Montserrat', sans-serif; cursor:
    pointer; padding-top: 1px; text-decoration: none;" (click)="onLogout()">Logout</a>`
})
export class LogoutComponent {
    constructor(private AuthenticationService: AuthenticationService, private router: Router) {}

    onLogout() {
        this.AuthenticationService.logout();
        this.router.navigate(['/welcome']);
    }
}
