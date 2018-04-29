import { Component, Input } from "@angular/core";

import { Project } from "../project.model";
import { ProjectIndexService } from "./project_index.service";

@Component({
  selector: 'project-index-item',
  templateUrl: './project_index_item.component.html',
  styleUrls: ['./project_index_item.component.css']
})

export class ProjectIndexItem {
  @Input() project: Project;

  constructor(private projectIndexService: ProjectIndexService) {}
}
