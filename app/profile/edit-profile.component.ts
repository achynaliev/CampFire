import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormControl, Validators } from "@angular/forms";

import { ProfileService } from './profile.service';
import { Profile } from './profile.model';

@Component({
  selector: 'cf-edit-profile',
  templateUrl: './edit-profile.component.html',
  styleUrls: ['./edit-profile.component.css']
})

export class EditProfileComponent implements OnInit {
  myForm: FormGroup;

  constructor(private profileService: ProfileService, private router: Router) {}

  onSubmit() {
      const profile = new Profile(
          "",
          "",
          "updated",
          "",
          this.myForm.value.imageUrl,
          this.myForm.value.userBio,
          this.myForm.value.location,
          this.myForm.value.graduation,
          this.myForm.value.stack,
          this.myForm.value.githubLink,
          this.myForm.value.linkedInLink
      );
      this.profileService.updateProfile(profile)
          .subscribe(
            data => {
                console.log(data);
                this.router.navigateByUrl(`/profile/${data.username}`);
            },
            error => console.error(error)
          );
      this.myForm.reset();
  }

  ngOnInit() {
      this.myForm = new FormGroup({
          imageUrl: new FormControl(),
          userBio: new FormControl(),
          location: new FormControl(),
          graduation: new FormControl(),
          stack: new FormControl(),
          githubLink: new FormControl(),
          linkedInLink: new FormControl()
      });
  }
}
