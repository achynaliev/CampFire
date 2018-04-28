import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from '../navbar/navbar.component';
import { ProjectCreationComponent } from './project_creation/project_creation.component';
import { ProjectRoutes } from './projects.routes';

@NgModule({
  imports: [
    CommonModule,
    ProjectRoutes,
    NavbarComponent
  ],
  declarations: [
    ProjectCreationComponent
  ]
})

export class ProjectsModule {}
