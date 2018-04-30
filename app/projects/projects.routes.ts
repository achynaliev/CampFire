import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProjectCreationComponent } from './project_creation/project_creation.component';

export const projectRoutes: Routes = [
  
];

@NgModule({
  imports: [
    RouterModule.forChild(projectRoutes)
  ],
  exports: [
    RouterModule
  ]
})

export class ProjectShowRoutingModule {};
