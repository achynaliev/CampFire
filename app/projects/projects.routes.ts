import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// import { ProjectCreationComponent } from './project_creation/project_creation.component';
import { ProjectIndexComponent } from './project_index/';
// import { DummyComponent } from '../dummy.component';

export const ProjectRoutes: Routes = [
  {
    path: 'category/:categoryTitle',
    component: ProjectIndexComponent,

  }
  // { path: '', component: DummyComponent }
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
