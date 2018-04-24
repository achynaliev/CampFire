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
            .map(result => console.log(result));
    }
}
