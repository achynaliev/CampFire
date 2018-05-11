import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RootMainComponent } from './rootmain.component';

export const RootMainRoutes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  {
    path: 'dashboard',
    component: RootMainComponent,
    loadChildren: '../projects/projects.module#ProjectsModule'
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
