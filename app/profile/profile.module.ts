import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

import { ProfileComponent } from './profile.component';
import { ProfileRoutingModule } from './profile-routing.module';
import { EditProfileComponent } from './edit-profile.component';

import { SharedModule } from '../shared/shared.module';

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
  ]
})

export class ProfileModule {}
