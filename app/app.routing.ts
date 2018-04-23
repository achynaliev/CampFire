import { Routes, RouterModule } from "@angular/router";
import { AuthenticationComponent } from "./auth/authentication.component";
import { AUTH_ROUTES } from "./auth/auth.routes";
import { RootMainComponent } from "./rootmain/rootmain.component";
import { RootMainRoutes } from "./rootmain/rootmain.routes";

const APP_ROUTES: Routes = [
    { path: '', component: RootMainComponent, children: RootMainRoutes },
    { path: 'welcome', component: AuthenticationComponent, children: AUTH_ROUTES }
];

export const routing = RouterModule.forRoot(APP_ROUTES);
