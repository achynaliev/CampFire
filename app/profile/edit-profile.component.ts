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
          this.myForm.value.location,
          this.myForm.value.graduation,
          this.myForm.value.stack,
          this.myForm.value.githubLink,
          this.myForm.value.linkedInLink
      );
      this.profileService.updateProfile(profile)
          .subscribe(
            data => {

                this.router.navigateByUrl('/');
            },
            error => console.error(error)
          );
      this.myForm.reset();
  }

  ngOnInit() {
      this.myForm = new FormGroup({
          location: new FormControl(null, Validators.required),
          graduation: new FormControl(null, Validators.required),
          stack: new FormControl(null, Validators.required),
          githubLink: new FormControl(null, [
              Validators.required,
              // update with pattern for link
              // Validators.pattern("[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?")
          ]),
          linkedInLink: new FormControl(null, Validators.required)
      });
  }
}
