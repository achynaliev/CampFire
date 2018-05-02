import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { FormGroup, FormControl, Validators } from "@angular/forms";
import $ from "jquery";

import { AuthenticationService } from "./auth.service";
import { User } from "../user.model";

@Component({
    selector: 'app-signup',
    templateUrl: './signup.component.html'
})
export class SignupComponent implements OnInit {
    myForm: FormGroup;

    constructor(private AuthenticationService: AuthenticationService, private router: Router) {}

    onSubmit() {
        const user = new User(
            this.myForm.value.firstName,
            this.myForm.value.lastName,
            this.myForm.value.username,
            this.myForm.value.email,
            this.myForm.value.passwordDigest,
            null,
            null,
        );
        this.AuthenticationService.signup(user)
            .subscribe(
              data => {
                  localStorage.setItem('token', data.token);
                  localStorage.setItem('currentUser', JSON.stringify(data.currentUser));
                  this.router.navigateByUrl('/');
              },
              error => console.error(error)
            );
            this.myForm.reset();
            $("div").removeClass("modal-backdrop in");
    }

    ngOnInit() {
        this.myForm = new FormGroup({
            firstName: new FormControl(null, Validators.required),
            lastName: new FormControl(null, Validators.required),
            username: new FormControl(null, Validators.required),
            email: new FormControl(null, [
                Validators.required,
                Validators.pattern("[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?")
            ]),
            passwordDigest: new FormControl(null, Validators.required)
        });
    }
}
