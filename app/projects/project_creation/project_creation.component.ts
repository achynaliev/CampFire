import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { FormGroup, FormControl, Validators } from "@angular/forms";
import { Project } from "../project.model";

@Component({
  selector: 'project-creation',
  templateUrl: './project_creation.component.html',
  styleUrls: ['./project_creation.component.css']
})

export class ProjectCreationComponent implements OnInit {
  myForm: FormGroup;
  constructor(private router: Router) {}

  ngOnInit() {
      this.myForm = new FormGroup({
          title: new FormControl(null, Validators.required),
          imageUrl: new FormControl(null, Validators.required),
          fullDescription: new FormControl(null, Validators.required),
          shortDescription: new FormControl(null, Validators.required)
      });
  }

  onSubmit() {
      const project = new Project(
          this.myForm.value.title,
          localStorage.getItem('currentUser'),
          this.myForm.value.username,
          this.myForm.value.email,
          null,
          null,
          this.myForm.value.passwordDigest
      );
      this.authService.signup(user)
          .subscribe(
            data => {
                localStorage.setItem('token', data.token);
                localStorage.setItem('userId', data.userId);
                this.router.navigateByUrl('/');
            },
            error => console.error(error)
          );
      this.myForm.reset();
  }
}
