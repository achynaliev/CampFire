import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  Resolve,
  Router,
  RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs/Rx';

import { Project } from './project.model';
import { ProjectIndexService } from './project_index';

@Injectable()
export class ProjectsResolver implements Resolve<Project[]> {
  constructor(
    private projectService: ProjectIndexService,
    private router: Router
  ) {}

  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<any> {
    return this.projectService.getProjectsByCategory(route.params['categoryTitle'])
                .catch((err) => this.router.navigateByUrl('/'))
  }
}
