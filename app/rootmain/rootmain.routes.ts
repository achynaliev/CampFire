import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RootMainComponent } from './rootmain.component';
import { RoomListComponent } from './rooms/room-list.component';

export const RootMainRoutes: Routes = [
  { path: '', component: RootMainComponent, pathMatch: 'full' },
  { path: 'room', component: RoomListComponent}
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
