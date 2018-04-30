import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { Project } from "../project.model";

@Component({
  selector: 'project-show',
  templateUrl: './project_show.html',
  styleUrls: ['./project_show.css']
})

export class ProjectShowContainer implements OnInit {
  project: Project;

  constructor(
    private route: ActivatedRoute,
    private profileService: ProfileService,
    private location: Location
  ) {}

  ngOnInit() {

  }
}
