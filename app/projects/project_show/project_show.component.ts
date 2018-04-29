import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { Project } from "../project.model";
import { ProjectShowService } from "./project_show.service";

@Component({
  selector: 'project-show',
  templateUrl: './project_show.component.html',
  styleUrls: ['./project_show.component.css']
})

export class ProjectShowContainer implements OnInit {
  project: Project;


  constructor(
    private route: ActivatedRoute,
    private projectShowService: ProjectShowService,
    private location: Location
  ) {}

  ngOnInit() {
    this.projectShowService.getProjectByTitle()
      .subscribe(
        (project: Project) => {
          this.project = project[0];
        }
        // console.log(project[0]);
        console.log("isis");
      )
  }
}
