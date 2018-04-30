import { Component, Input } from "@angular/core";
import { Router } from "@angular/router";

import { Room } from "./room.model";
import { RoomService } from "./room.service";
import { ProjectIndexService } from "../../projects/project_index/project_index.service.ts";
import { Project } from "../../projects/project.model";

@Component({
    selector: 'app-room',
    templateUrl: './room.component.html',
    styleUrls: ['./roomslistitem.component.css']
})
export class RoomComponent{
    @Input() room: Room;

    constructor(private roomService: RoomService,
                private router: Router,
                private projectIndexService: ProjectIndexService) {}

    ChangeRoom() {
      this.projectIndexService.getProjects(this.room.title)
        .subscribe(
          (projects: Project[]) => {
            console.log(projects);
            this.projects = projects;
          }
        )
    }
}
