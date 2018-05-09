import { Injectable } from '@angular/core';
import { Http, Headers, Response } from '@angular/http';
import { Observable } from "rxjs";

@Injectable()
export class ProjectService {
  constructor( private http: Http ) {}

  createProject(project) {
      const body = JSON.stringify(project);
      console.log(body)
      const headers = new Headers({'Content-Type': 'application/json'});
      return this.http.post('https://camp-fire.herokuapp.com/project', body, {headers: headers})
          .map((response: Response) => response.json())
          .catch((error: Response) => Observable.throw(error.json()));
  }
}
