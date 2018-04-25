import { Component } from "@angular/core";
import { Router } from "@angular/router";

import { AuthService } from "./auth.service";

@Component({
    selector: 'app-logout',
    template: `<a style="color: white; font-size: 18px; font-family: 'Montserrat', sans-serif; cursor:
    pointer; padding-top: 1px; text-decoration: none;" (click)="onLogout()">Logout</a>`
})
export class LogoutComponent {
    constructor(private authService: AuthService, private router: Router) {}

    onLogout() {
        this.authService.logout();
        this.router.navigate(['/welcome']);
    }
}
