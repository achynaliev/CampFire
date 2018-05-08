import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedModule } from '../shared/shared.module';
import { RootMainComponent } from './rootmain.component';
import { CurrentRoomComponent } from './currentroom/currentRoom.component';
import { ProjectsModule } from '../projects/projects.module';
import { UserComponent } from './userContainer/userContainer.component';
import { RoomListComponent, RoomComponent } from './rooms';
import { RootMainRoutes } from './rootmain.routes';
import { ProjectIndexItem, ProjectIndexComponent } from '../projects/project_index';

@NgModule({
  imports: [
    CommonModule,
    ProjectsModule,
    SharedModule
  ],
  declarations: [
    RootMainComponent,
    UserComponent,
    RoomComponent,
    RoomListComponent,
    CurrentRoomComponent,
    ProjectIndexComponent,
    ProjectIndexItem
  ]
})

export class RootMainModule {}
