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

    return this.http.get(`https://camp-fire.herokuapp.com/projects`, {headers: headers, params: {id: id}})
      .map((response: Response) => response.json())
      .catch((error: Response) => Observable.throw(error.json()));
      // console.log(response)
  }

  // updateProject(project: Project): Observable<Project> {
  //   const body = JSON.stringify(user);
  //   const headers = new Headers({'Content-type': 'application/json'});
  //   return this.http.put(`https://camp-fire.herokuapp.com/project/${project.projectId}`, body, {headers: headers})
  //     .map((response: Response) => response.json())
  //     .catch((error: Response) => Observable.throw(error.json()));
  // }
}
