import { Component, OnInit } from "@angular/core";

import { RoomService } from "./room.service";
import { Room } from "./room.model";

@Component({
    selector: 'app-message-list',
    template: `
    <div>
      <h1>Hello</h1>
    </div>
    `
})
export class RoomListComponent implements OnInit {
    rooms: Room[];

    constructor(private RoomService: RoomService) {}

    ngOnInit() {
        this.RoomService.getRooms()
            .subscribe(
                (rooms: Room[]) => {
                    this.rooms = rooms;
                }
            );
    }
}
