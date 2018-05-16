import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// import { ProjectCreationComponent } from './project_creation/project_creation.component';
import { ProjectIndexComponent } from './project_index/';
import { ProjectsResolver } from './projects-resolver.service';
// import { DummyComponent } from '../dummy.component';

export const ProjectRoutes: Routes = [
  { path: '', redirectTo: 'category/MEAN', pathMatch: 'full' },
  {
    path: 'category/:categoryTitle',
    component: ProjectIndexComponent,
    resolve: {
      projects: ProjectsResolver
    }
  }
  // { path: '', component: DummyComponent }
];

@NgModule({
  imports: [
    RouterModule.forChild(ProjectRoutes)
  ],
  exports: [
    RouterModule
  ],
  providers: [
    ProjectsResolver
  ]
})

export class ProjectRoutingModule {};
