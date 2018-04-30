import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { ProjectIndexService } from "../../projects/project_index/project_index.service";
import { Project } from "../../projects/project.model";

@Component({
  selector: 'current-room',
  templateUrl: './currentRoom.component.html',
  styleUrls: ['./currentRoom.component.css']
})

export class CurrentRoomComponent implements OnInit {
  projects: Project[];

  constructor(private router: Router, private projectIndexService: ProjectIndexService) {}

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
