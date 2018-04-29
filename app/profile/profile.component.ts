import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { ProfileService } from './profile.service';
import { AuthService } from '../auth/splash/auth.service';
import { Profile } from './profile.model';

@Component({
  selector: 'cf-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})

export class ProfileComponent implements OnInit {
  profile: Profile;
  isOwnProfile: boolean;

  constructor(
    private route: ActivatedRoute,
    private authService: AuthService,
    private profileService: ProfileService,
    private location: Location
  ) {}

  ngOnInit() {
    this.route.data.subscribe(
      (data: {profile: Profile}) => {
        this.profile = data.profile;
      }
    );
    this.canEdit();
  }

  getBackgroundImage() {
    return "url(this.profile.profileBackgroundImage)";
  }

  goBack(): void {
    this.location.back();
  }

  canEdit() {
    let user = JSON.parse(localStorage.getItem('currentUser'));
    if (this.profile.username === user.username) {
      this.isOwnProfile = true;
    } else {
      this.isOwnProfile = false;
    }
  }
}
