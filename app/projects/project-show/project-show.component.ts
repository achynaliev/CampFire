import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { ProjectShowService } from './project-show.service';
import { Project } from '../project.model';

@Component({
  selector: 'project-show',
  templateUrl: './project-show.component.html',
  styleUrls: ['./project-show.component.css']
})

export class ProjectShowComponent implements OnInit {
  project: Project;

  constructor(
    private route: ActivatedRoute,
    private projectShowService: ProjectShowService,
    private location: Location
  ) {}

  ngOnInit() {
    this.route.data.subscribe(
      (data) => {
        // console.log("------>>>", data.project)
        this.project = data.project.obj.filter(obj => obj._id === this.route.snapshot.params.id)[0];
      }
    );
  }

  goBack(): void {
    this.location.back();
  }
}
