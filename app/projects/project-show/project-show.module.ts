import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { ProjectShowComponent } from './project-show.component';
import { ProjectShowService } from './project-show.service';
import { ProjectShowRoutingModule } from './project-show-routing.module';
// import { EditProjectComponent } from './edit-project.component';

import { SharedModule } from '../../shared/shared.module';
// import { AuthService } from '../../auth/splash/auth.service';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ProjectShowRoutingModule,
    SharedModule,
    ReactiveFormsModule
  ],
  declarations: [
    ProjectShowComponent
    // EditProjectComponent
  ],
  providers: [ProjectShowService]
})

export class ProjectShowModule {}
