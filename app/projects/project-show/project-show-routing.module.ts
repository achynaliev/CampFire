import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProjectShowComponent } from './project-show.component';
// import { EditProjectComponent } from './edit-project.component';
import { ProjectShowResolver } from './project-show-resolver.service';

export const projectShowRoutes: Routes = [
  // {
  //   path: 'project/:id/editProject',
  //   component: EditProjectComponent,
  //   resolve: {
  //     project: ProjectShowResolver
  //   }
  // },
  {
    path: 'project/:id',
    component: ProjectShowComponent,
    resolve: {
      project: ProjectShowResolver
    }
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(projectShowRoutes)
  ],
  exports: [
    RouterModule
  ],
  providers: [
    ProjectShowResolver
  ]
})

export class ProjectRoutingModule {}
