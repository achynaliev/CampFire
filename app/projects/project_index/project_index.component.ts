import { Component, OnInit, ContentChild, TemplateRef } from "@angular/core";

import { ProjectIndexService } from "./project_index.service.ts";
import { Project } from "../project.model";

@Component({
  selector: 'project-index',
  templateUrl: './project_index.component.html',
  styleUrls: ['project_index.component.css']
})

export class ProjectIndexComponent{
  @ContentChild(TemplateRef)
  template: TemplateRef<Project>;
  projects: Project[];

  constructor(private projectIndexService: ProjectIndexService) {}

  ngOnInit() {
    this.projectIndexService.getProjects("Node.js")
      .subscribe(
        (projects: Project[]) => {
          console.log(projects);
          this.projects = projects;
        }
      )
  }
}
