import { Component, OnInit } from "@angular/core";

import { RoomService } from "./room.service";
import { Room } from "./room.model";

@Component({
    selector: 'app-room-list',
    template: `
    <div>
      <app-room
          [room]="room"
          *ngFor="let room of rooms"></app-room>
    </div>
    `
})
export class RoomListComponent implements OnInit {
    rooms: Room[];

    constructor(private roomService: RoomService) {}

    ngOnInit() {
        this.roomService.getRooms()
            .subscribe(
                (rooms: Room[]) => {
                    this.rooms = rooms;
                }
            );
    }
}
