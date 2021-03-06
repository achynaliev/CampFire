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
    return this.http.get(`https://camp-fire.herokuapp.com/profiles/${username}`, {headers: headers})
        .map((response: Response) => response.json())
        .catch((error: Response) => Observable.throw(error.json()));
  }

  updateProfile(user: Profile): Observable<Profile> {
    const body = JSON.stringify(user);
    const headers = new Headers({'Content-Type': 'application/json'});
    return this.http.put(`https://camp-fire.herokuapp.com/profiles/${user.username}`, body, {headers: headers})
      .map((response: Response) => response.json())
      .catch((error: Response) => Observable.throw(error.json()));
  }
}
