import { Injectable, EventEmitter } from "@angular/core";
import { Http, Response, Headers } from "@angular/http";
import 'rxjs/Rx';
import { Observable } from 'rxjs';
import { Project } from "../project.model";

@Injectable()
export class ProjectShowService {
  private project: Project;

  constructor(private http: Http) { }

  getProjectByTitle(title: string) {
    const currentUser = localStorage.getItem('currentUser');
    var user = JSON.parse(currentUser);
    const headers = new Headers({'Content-Type': 'application/json'});
    return this.http.get(`http://localhost:3000/project/${title}`, {headers: headers}, params: {title: title})
    console.log("hiiiiiiii IIIIIssssssiiiiiissssssssss", response.json());

    .map((response: Response) => this.project = response.json())
    .catch((error: Response) => Observable.throw(error.json()));
  }
}
