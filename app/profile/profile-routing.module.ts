import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProfileComponent } from './profile.component';
import { EditProfileComponent } from './edit-profile.component';
import { ProfileResolver } from './profile-resolver.service';

export const profileRoutes: Routes = [
  {
    path: 'profile/:username/editProfile',
    component: EditProfileComponent,
    resolve: {
      profile: ProfileResolver
    }
   },
  {
    path: 'profile/:username',
    component: ProfileComponent,
    resolve: {
      profile: ProfileResolver
    }
  },
];

@NgModule({
  imports: [
    RouterModule.forChild(profileRoutes)
  ],
  exports: [
    RouterModule
  ],
  providers: [
    ProfileResolver
  ]
})
export class ProfileRoutingModule {}
