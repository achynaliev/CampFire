import { Routes, RouterModule } from "@angular/router";
import { AuthenticationComponent } from "./auth/splash/authentication.component";
import { AUTH_ROUTES } from "./auth/auth.routes";
import { RootMainComponent } from "./rootmain/rootmain.component";
import { RootMainRoutes } from "./rootmain/rootmain.routes";
import { ProjectCreationComponent } from './projects/project_creation/project_creation.component';

const APP_ROUTES: Routes = [
    { path: '', component: RootMainComponent, children: RootMainRoutes },
<<<<<<< HEAD
    { path: 'welcome', component: AuthenticationComponent, children: AUTH_ROUTES },
    { path: 'project/new', component: ProjectCreationComponent},
=======
    { path: 'welcome', component: AuthenticationComponent, children: AUTH_ROUTES }
    // { path: 'project/new', component: ProjectCreationComponent};
>>>>>>> 89f613b4a2dbfea74f85f6790f19bf48659f9f0b
];

export const routing = RouterModule.forRoot(APP_ROUTES);
