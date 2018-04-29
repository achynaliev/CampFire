import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { FormGroup, FormControl, Validators } from "@angular/forms";
import { Project } from "../project.model";
import { ProjectService } from "../projects.service";

@Component({
  selector: 'project-creation',
  templateUrl: './project_creation.component.html',
  styleUrls: ['./project_creation.component.css']
})

export class ProjectCreationComponent implements OnInit {
  myForm: FormGroup;
  constructor(private projectService: ProjectService, private router: Router) {}

  ngOnInit() {
      this.myForm = new FormGroup({
          title: new FormControl(null, Validators.required),
          imageUrl: new FormControl(null, Validators.required),
          fullDescription: new FormControl(null, Validators.required),
          shortDescription: new FormControl(null, Validators.required)
      });
  }

  onSubmit() {
      var cuser = localStorage.getItem('currentUser');
      var user = JSON.parse(cuser);
      const project = new Project(
          this.myForm.value.title,
          user.userId,
          user.username,
          new Date(),
          this.myForm.value.imageUrl,
          this.myForm.value.fullDescription,
          this.myForm.value.shortDescription,
          "Node.js",
          false
      );
      this.projectService.createProject(project)
          .subscribe(
            data => {
              console.log(data);
            },
            error => console.error(error)
          );
      this.myForm.reset();
  }
}
