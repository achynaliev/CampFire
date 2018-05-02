import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

import { ProfileComponent } from './profile.component';
import { ProfileRoutingModule } from './profile-routing.module';
import { EditProfileComponent } from './edit-profile.component';

import { SharedModule } from '../shared/shared.module';

import { ProfileResolver } from './profile-resolver.service';
import { ProfileService } from './profile.service';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ProfileRoutingModule,
    SharedModule,
    ReactiveFormsModule
  ],
  declarations: [
    ProfileComponent,
    EditProfileComponent
  ],
  providers: [
    ProfileResolver,
    ProfileService
  ]
})

export class ProfileModule {}
