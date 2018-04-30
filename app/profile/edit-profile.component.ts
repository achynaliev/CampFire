import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormGroup, FormControl, Validators } from "@angular/forms";
import { Location } from '@angular/common';

import { ProfileService } from './profile.service';
import { Profile } from './profile.model';

@Component({
  selector: 'cf-edit-profile',
  templateUrl: './edit-profile.component.html',
  styleUrls: ['./edit-profile.component.css']
})

export class EditProfileComponent implements OnInit {
  myForm: FormGroup;
  currentUser: Profile;

  constructor(
    private route: ActivatedRoute,
    private location: Location,
    private profileService: ProfileService,
    private router: Router) {}

  onSubmit() {
      const profile = new Profile(
          this.myForm.value.bootcamp,
          this.currentUser.email,
          this.currentUser.firstName,
          this.myForm.value.githubLink,
          this.myForm.value.graduation,
          this.myForm.value.imageUrl,
          this.currentUser.lastName,
          this.myForm.value.linkedInLink,
          this.myForm.value.location,
          this.currentUser.phone,
          this.myForm.value.profileBackgroundImage,
          this.myForm.value.stack,
          this.myForm.value.userBio,
          this.currentUser.username,
      );
      this.profileService.updateProfile(profile)
          .subscribe(
            data => {
                this.router.navigateByUrl(`/profile/${data.username}`);
            },
            error => console.error(error)
          );
      this.myForm.reset();
      location.reload();
  }

  ngOnInit() {
    this.route.data.subscribe(
      (data: {profile: Profile}) => {
        this.currentUser = data.profile;
      }
    );
    this.myForm = new FormGroup({

        bootcamp: new FormControl(this.currentUser.bootcamp),
        imageUrl: new FormControl(this.currentUser.imageUrl),
        profileBackgroundImage: new FormControl(this.currentUser.profileBackgroundImage),
        userBio: new FormControl(this.currentUser.userBio),
        location: new FormControl(this.currentUser.location),
        graduation: new FormControl(this.currentUser.graduation),
        stack: new FormControl(this.currentUser.stack),
        githubLink: new FormControl(this.currentUser.githubLink),
        linkedInLink: new FormControl(this.currentUser.linkedInLink)
    });
  }
}
