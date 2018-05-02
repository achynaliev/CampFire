import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ChatComponent } from './chat.component';

export const chatRoutes: Routes = [
  {
    path: 'chat/:room',
    component: ChatComponent
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(chatRoutes)
  ],
  exports: [
    RouterModule
  ]
})

export class ChatRoutingModule {}
