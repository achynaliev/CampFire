import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

import { ProfileComponent } from './profile.component';
import { ProfileService } from './profile.service';
import { ProfileRoutingModule } from './profile-routing.module';
import { EditProfileComponent } from './edit-profile.component';

import { SharedModule } from '../shared/shared.module';
import { AuthService } from '../auth/splash/auth.service';

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
  providers: [ProfileService, AuthService]
})

export class ProfileModule {}
