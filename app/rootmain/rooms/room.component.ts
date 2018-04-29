import { Component, Input } from "@angular/core";

import { Room } from "./room.model";
import { RoomService } from "./room.service";

@Component({
    selector: 'app-room',
    templateUrl: './room.component.html',
    styleUrls: ['./roomslistitem.component.css']
})
export class RoomComponent {
    @Input() room: Room;
    console.log(room)

    constructor(private roomService: RoomService) {}

    ChangeRoom() {

    }

}
