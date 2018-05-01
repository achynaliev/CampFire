import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProjectCreationComponent } from './project_creation/project_creation.component';

export const ProjectRoutes: Routes = [

];

@NgModule({
  imports: [
    RouterModule.forChild(ProjectRoutes)
  ],
  exports: [
    RouterModule
  ]
})

export class ProjectRoutingModule {};
