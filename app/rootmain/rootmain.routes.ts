import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RootMainComponent } from './rootmain.component';
import { RoomListComponent } from './rooms/room-list.component';
// import { ProjectIndexComponent } from '../projects/project_index/project_index.component';

export const RootMainRoutes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  {
    path: 'dashboard',
    component: RootMainComponent,
    // loadChildren: '../projects/projects.module#ProjectsModule'
    // children: [
    //   {
    //     path: ':categoryTitle',
    //     component: ProjectIndexComponent,
    //   }
    // ]
  },
  // this is a backend route to see all rooms
  // { path: 'room', component: RoomListComponent}
];

@NgModule({
  imports: [
    RouterModule.forChild(RootMainRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class RootMainRoutingModule {}
