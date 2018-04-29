import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProjectShowService } from './project_show/project_show.service';
import { ProjectShowComponent } from './project_show/project_show.component';
import { ProjectCreationComponent } from './project_creation/project_creation.component';

export const projectRoutes: Routes = [
  { path: 'project/:title', component: ProjectShowComponent }
];

@NgModule({
  imports: [
    RouterModule.forChild(projectRoutes)
  ],
  exports: [
    RouterModule
  ],
  providers: [ProjectShowService]
})

export class ProjectShowRoutingModule {};
