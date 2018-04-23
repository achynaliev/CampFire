import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RootMainComponent } from './rootmain.component';

export const RootMainRoutes: Routes = [
  { path: '', component: RootMainComponent, pathMatch: 'full' }
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
