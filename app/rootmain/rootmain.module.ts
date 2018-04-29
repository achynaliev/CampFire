import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from '../navbar/navbar.component';
import { RootMainComponent } from './rootmain.component';
import { CurrentRoomComponent } from './currentroom/currentRoom.component';

import { RootMainRouting } from './rootmain.routes';

@NgModule({
  imports: [
    CommonModule,
    RootMainRouting,
    NavbarComponent,
  ],
  declarations: [
    RootMainComponent,CurrentRoomComponent
  ]
})

export class RootMainModule {}
