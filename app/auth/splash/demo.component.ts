import { Component } from "@angular/core";
import { Router } from "@angular/router";

import { AuthenticationService } from "./auth.service";

@Component({
    selector: 'app-demo',
    template: `<a style="color: white; font-size: 18px; font-family: 'Montserrat', sans-serif; cursor:
    pointer; padding-top: 1px; text-decoration: none;" (click)="demo()">DEMO LOGIN</a>`
})
export class DemoComponent {
    constructor(private AuthenticationService: AuthenticationService, private router: Router) {}

    demo() {
      this.AuthenticationService.demosignin()
          .subscribe(
              data => {
                  localStorage.setItem('token', data.token);
                  localStorage.setItem('currentUser', JSON.stringify(data.currentUser));
                  this.router.navigateByUrl('/');
              },
              error => console.error(error)
          );
    }
}
