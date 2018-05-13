import { Component, OnInit, ContentChild, TemplateRef } from "@angular/core";
import { ActivatedRoute } from '@angular/router';

import { ProjectIndexService } from "./project_index.service";
import { Project } from "../project.model";
import { ProjectIndexItem } from './project_index_item.component';

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
    // console.log(this.route.snapshot);
    let category = this.route.snapshot.paramMap.get('categoryTitle');
    console.log(category)
    this.projectIndexService.getProjectsByCategory(category)
      .subscribe(projects => this.projects = projects);
    // this.projects = this.route.snapshot.data['categoryTitle'];
    // this.projectIndexService.getProjects()
    //   .subscribe(
    //     (projects: Project[]) => {
    //       this.projects = projects;
    //     }
    //   )
  }
}

// let id = this.route.snapshot.paramMap.get('id');
//     this.contactsService.getContact(id)
//         .subscribe(contact => this.contact = contact);
