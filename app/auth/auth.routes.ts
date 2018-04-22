import { Routes } from "@angular/router";

import { SignupComponent } from "./signup.component";

export const AUTH_ROUTES: Routes = [
    { path: '', redirectTo: 'welcome', pathMatch: 'full' },
    { path: 'signup', component: SignupComponent }
];
