import { Component, OnInit, ContentChild, TemplateRef } from "@angular/core";
import { ActivatedRoute } from '@angular/router';

import { ProjectIndexService } from "./project_index.service";
import { Project } from "../project.model";

@Component({
  selector: 'project-index',
  templateUrl: './project_index.component.html',
  styleUrls: ['project_index.component.css']
})

export class ProjectIndexComponent implements OnInit {
  @ContentChild(TemplateRef)
  template: TemplateRef<Project>;
  projects: Project[];

  constructor(
    private projectIndexService: ProjectIndexService,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.projects = this.route.snapshot.data['categoryTitle'];
    // this.projectIndexService.getProjects()
    //   .subscribe(
    //     (projects: Project[]) => {
    //       this.projects = projects;
    //     }
    //   )
  }
}
