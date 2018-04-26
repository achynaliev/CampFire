import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProfileComponent } from './profile.component';
import { EditProfileComponent } from './edit-profile.component';
import { ProfileResolver } from './profile-resolver.service';

export const profileRoutes: Routes = [
  {
    path: 'profile/:username',
    component: ProfileComponent,
    resolve: {
      profile: ProfileResolver
    }
  },
  { path: 'editProfile', component: EditProfileComponent }
];

@NgModule({
  imports: [
    RouterModule.forChild(profileRoutes)
  ],
  exports: [
    RouterModule
  ],
  providers: [ProfileResolver]
})
export class ProfileRoutingModule {}
