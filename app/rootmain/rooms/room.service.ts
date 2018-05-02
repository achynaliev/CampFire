import { Http, Response, Headers } from "@angular/http";
import { Injectable, EventEmitter } from "@angular/core";
import 'rxjs/Rx';
import { Observable } from "rxjs";
import { Room } from "./room.model";

@Injectable()
export class RoomService {
  private rooms: Room[] = [];
    constructor(private http: Http) {
    }

    getRooms() {
        const currentUser = localStorage.getItem('currentUser');
        var user = JSON.parse(currentUser);
        const headers = new Headers({'Content-Type': 'application/json'});
        return this.http.get('https://camp-fire.herokuapp.com/room')
            .map((response: Response) => {
                const rooms = response.json().obj;
                let transformedMessages: Room[] = [];
                for (let room of rooms) {
                    transformedMessages.push(new Room(
                        room.title,
                        room.category,
                        room.logoUrl,
                    ));
                }
                this.rooms = transformedMessages;
                return transformedMessages;
            })
            .catch((error: Response) => Observable.throw(error.json()));
    }
}
