import { Injectable, EventEmitter } from "@angular/core";
import { Http, Response, Headers } from "@angular/http";
import 'rxjs/Rx';
import { Observable } from 'rxjs';
import { Project } from "../project.model";

@Injectable()
export class ProjectIndexService {

  private projects: Project[];

  constructor(private http: Http) { }

  getProjects(categoryTitle) {
    const currentUser = localStorage.getItem('currentUser');
    var user = JSON.parse(currentUser);
    var body = {categoryTitle: categoryTitle }
    const headers = new Headers({'Content-Type': 'application/json'});
    return this.http.get('http://localhost:3000/project', {headers: headers, params: {categoryTitle: categoryTitle}})
      .map((response: Response) => {
        const projects = response.json().obj;
        let transformedProjects: Project[] = [];
        for (let project of projects) {
          transformedProjects.push(new Project(
            project.title,
            project.ownerId,
            project.username,
            project.createdDate,
            project.imageUrl,
            project.fullDescription,
            project.shortDescription,
            project.category,
            project.done,
            project._id
          ));
        }
        this.projects = transformedProjects;
        return transformedProjects;
      })
      .catch((error: Response) => Observable.throw(error.json()));
  }
}
