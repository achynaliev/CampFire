import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedModule } from '../shared/shared.module';
import { RootMainComponent } from './rootmain.component';
import { CurrentRoomComponent } from './currentroom/currentRoom.component';
import { UserComponent } from './userContainer/userContainer.component';
import { RoomListComponent, RoomComponent } from './rooms';
import { RootMainRoutingModule } from './rootmain.routes';

@NgModule({
  imports: [
    CommonModule,
    RootMainRoutingModule,
    SharedModule
  ],
  declarations: [
    RootMainComponent,
    UserComponent,
    RoomComponent,
    RoomListComponent,
    CurrentRoomComponent,
  ]
})

export class RootMainModule {}
