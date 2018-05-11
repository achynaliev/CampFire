import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
// import { FormsModule, ReactiveFormsModule } from "@angular/forms";

// import { SharedModule } from '../shared/shared.module';
// import { ProjectCreationComponent } from './project_creation/project_creation.component';
import { ProjectRoutingModule } from './projects.routes';
import { ProjectIndexItem, ProjectIndexComponent } from './project_index/';
import { DummyComponent } from '../dummy.component';

@NgModule({
  imports: [
    CommonModule,
    ProjectRoutingModule,
    // SharedModule,
    // FormsModule,
    // ReactiveFormsModule
  ],
  declarations: [
    // ProjectCreationComponent,
    ProjectIndexComponent,
    ProjectIndexItem,
    DummyComponent
  ]
})

export class ProjectsModule {}
