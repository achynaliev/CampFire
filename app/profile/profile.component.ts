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
    private ProfileService: ProfileService,
    private location: Location
  ) {}

  ngOnInit() {
    console.log(this.getProfile());
  }

  getProfile(): void {
    const username = this.route.snapshot.paramMap.get('username');
    this.ProfileService.getProfile(username)
          .subscribe(profile => this.profile = profile);
  }

  goBack(): void {
    this.location.back();
  }
}
