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
        const userId = localStorage.getItem('userId');
        let params = {userId}
        const headers = new Headers({'Content-Type': 'application/json'});
        return this.http.get('http://localhost:3000/room')
            .map((response: Response) => {
                const rooms = response.json().obj;
                let transformedMessages: Room[] = [];
                for (let room of rooms) {
                    transformedMessages.push(new Room(
                        room.title,
                        room.category,
                    );
                }
                this.messages = transformedMessages;
                return transformedMessages;
            })
            .catch((error: Response) => Observable.throw(error.json()));
    }
}
