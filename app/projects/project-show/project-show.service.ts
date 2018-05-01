import { Injectable } from '@angular/core';
import { Http, Headers, Response } from '@angular/http';
import 'rxjs/Rx';
import { Observable } from 'rxjs';
import { Project } from '../project.model';

@Injectable()
export class ProjectShowService {

  constructor(private http: Http) {}

  getProject(id): Observable<Project> {
    const headers = new Headers({'Content-type': 'application/json'});
    return this.http.get(`http://localhost:3000/project`, {headers: headers, params: {id: id}})
      .map((response: Response) => response.json())
      .catch((error: Response) => Observable.throw(error.json()));
  }

  // updateProject(project: Project): Observable<Project> {
  //   const body = JSON.stringify(user);
  //   const headers = new Headers({'Content-type': 'application/json'});
  //   return this.http.put(`http://localhost:3000/project/${project.projectId}`, body, {headers: headers})
  //     .map((response: Response) => response.json())
  //     .catch((error: Response) => Observable.throw(error.json()));
  // }
}