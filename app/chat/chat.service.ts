import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class ChatService {
  constructor( private http: Http ) {}

  getChatByRoom(room) {
    const headers = new Headers({'Content-Type': 'application/json'});
    return new Promise((resolve, reject) => {
      this.http.get('http://localhost:3000/chat', {headers: headers, params:{room}})
      .map(res => res.json())
      .subscribe(res => {
        resolve(res);
      }, (err) => {
        reject(err);
      });
    });
  }

  saveChat(data) {
    const headers = new Headers({'Content-Type': 'application/json'});
    console.log("****************", data);
    var room = data.room
    return new Promise((resolve, reject) => {
      this.http.post('http://localhost:3000/chat', {headers: headers, params: {room}})
      .map(res => console.log(res._body.obj))
      .subscribe(res => {
        resolve(res);
      }, (err) => {
        reject(err);
      });
    });
  }

}
