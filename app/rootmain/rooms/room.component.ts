import { Component, Input } from "@angular/core";

import { Room } from "./room.model";
import { RoomService } from "./room.service";

@Component({
    selector: 'app-room',
    templateUrl: './room.component.html',
    styles: [`
        .author {
            display: inline-block;
            font-style: italic;
            font-size: 12px;
            width: 80%;
        }
        .config {
            display: inline-block;
            text-align: right;
            font-size: 12px;
            width: 19%;
        }
    `]
})
export class RoomComponent {
    @Input() room: Room;

    constructor(private roomService: RoomService) {}

}
