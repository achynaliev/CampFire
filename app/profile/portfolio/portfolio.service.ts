import { Injectable, EventEmitter } from "@angular/core";
import { Http, Response, Headers } from "@angular/http";
import 'rxjs/Rx';
import { Observable } from 'rxjs';
import { Project } from "../../projects/project.model";

@Injectable()
export class PortfolioService {
  private projects: Project[];

  constructor(private http: Http) { }

    getProjects(usernam) {
      const headers = new Headers({'Content-Type': 'application/json'});
      return this.http.get(`http://localhost:3000/portfolio`, {headers: headers, params: {username: usernam}})
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
          console.log(transformedProjects)
          return transformedProjects;
        })
        .catch((error: Response) => Observable.throw(error.json()));
  }
}
