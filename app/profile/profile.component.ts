import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { ProfileService } from './profile.service';
import { Profile } from './profile.model';

@Component({
  selector: 'cf-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})

export class ProfileComponent implements OnInit {
  profile: Profile;

  constructor(
    private route: ActivatedRoute,
    private profileService: ProfileService,
    private location: Location
  ) {}

  ngOnInit() {
    this.route.data.subscribe(
      (data: {profile: Profile}) => {
        this.profile = data.profile;
      }
    );
  }

  getBackgroundImage() {
    console.log(this.profile.profileBackgroundImage);
    return "url(this.profile.profileBackgroundImage)";
  }

  goBack(): void {
    this.location.back();
  }
}
