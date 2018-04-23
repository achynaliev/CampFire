import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RootMainComponent } from './rootmain.component';

import { RootMainRouting } from './rootmain.routes';

@NgModule({
  imports: [
    CommonModule,
    RootMainRouting
  ],
  declarations: [
    RootMainComponent
  ]
})

export class RootMainModule {}
