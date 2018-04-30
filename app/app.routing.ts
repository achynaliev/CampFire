import { Routes, RouterModule } from "@angular/router";
import { AuthenticationComponent } from "./auth/splash/authentication.component";
import { AUTH_ROUTES } from "./auth/auth.routes";
import { RootMainComponent } from "./rootmain/rootmain.component";
import { RootMainRoutes } from "./rootmain/rootmain.routes";
import { ProjectCreationComponent } from './projects/project_creation/project_creation.component';

const APP_ROUTES: Routes = [
    { path: '', component: RootMainComponent, children: RootMainRoutes },
    { path: 'welcome', component: AuthenticationComponent, children: AUTH_ROUTES }
    // { path: 'project/new', component: ProjectCreationComponent};
];

export const routing = RouterModule.forRoot(APP_ROUTES);
