import { Routes, RouterModule } from "@angular/router";

import { SignupComponent } from "./splash/signup.component";
import { SigninComponent } from "./splash/signin.component";
import { LogoutComponent } from "./splash/logout.component";

export const AUTH_ROUTES: Routes = [
    { path: '', redirectTo: 'welcome', pathMatch: 'full' },
    // { path: 'signup', component: SignupComponent },
    // { path: 'signin', component: SigninComponent },
    { path: 'logout', component: LogoutComponent }
];
