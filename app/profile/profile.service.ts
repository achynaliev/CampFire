import { Injectable } from '@angular/core';
import { Http, Headers, Response } from '@angular/http';
import 'rxjs/Rx';
import { Observable } from 'rxjs';

import { Profile } from './profile.model';

@Injectable()
export class ProfileService {
  constructor(private http: Http) {}

  getProfile(username: string): Observable<Profile> {
    const headers = new Headers({'Content-Type': 'application/json'});
    return this.http.get(`http://localhost:3000/profile/${username}`, {headers: headers})
        .map((response: Response) => response.json())
        .catch((error: Response) => Observable.throw(error.json()));
  }
}