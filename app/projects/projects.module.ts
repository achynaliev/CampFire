import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

import { SharedModule } from '../shared/shared.module';
import { ProjectCreationComponent } from './project_creation/project_creation.component';
import { ProjectRoutes } from './projects.routes';
import { ProjectIndexItem, ProjectIndexComponent } from './project_index';

@NgModule({
  imports: [
    CommonModule,
    ProjectRoutes,
    SharedModule,
    FormsModule,
    ReactiveFormsModule
  ],
  declarations: [
    ProjectCreationComponent,
    ProjectIndexItem,
    ProjectIndexComponent
  ]
})

export class ProjectsModule {}
