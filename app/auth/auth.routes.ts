import { Routes, RouterModule } from "@angular/router";

import { SignupComponent } from "./header/signup.component";
import { SigninComponent } from "./header/signin.component";
import { LogoutComponent } from "./header/logout.component";

export const AUTH_ROUTES: Routes = [
    { path: '', redirectTo: 'welcome', pathMatch: 'full' },
    { path: 'signup', component: SignupComponent },
    { path: 'signin', component: SigninComponent },
    { path: 'logout', component: LogoutComponent }
];
