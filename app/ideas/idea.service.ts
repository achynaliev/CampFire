import { Injectable, EventEmitter } from "@angular/core";
import { Http, Response, Headers } from "@angular/http";
import 'rxjs/Rx';
import { Observable } from 'rxjs';
import { Project } from "./projects/project.model";

@Injectable()
export class ProjectService {
  private projects: Project[];
  constructor(private http: Http) {

  }

  getProjects() {
    const currentUser = localStorage.getItem('currentUser');
    var user = JSON.parse(currentUser);
    const headers = new Headers({'Content-Type': 'application/json'});
    return this.http.get('http://localhost:3000/projects', {params:{category: "Node.js"}})
      .map((response: Response) => {
        const projects = response.json().obj;
        let transformedProjects: Project[] = [];
        for (let project of projects) {
          transformedProjects.push(new Project(
            project.title,
            project.shortDescription,
            project.createdDate,
            project._id
          ));
        }
        this.projects = transformedProjects;
        return transformedProjects;
      })
      .catch((error: Response) => Observable.throw(error.jason()));
  }
}


// Get owner name also?? --> project.model
// .id or ._id or .ObjectId     ????
