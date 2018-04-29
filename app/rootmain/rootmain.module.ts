import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from '../navbar/navbar.component';
import { RootMainComponent } from './rootmain.component';

import { RootMainRouting } from './rootmain.routes';

@NgModule({
  imports: [
    CommonModule,
    RootMainRouting,
    NavbarComponent
  ],
  declarations: [
    RootMainComponent,

  ]
})

export class RootMainModule {}
