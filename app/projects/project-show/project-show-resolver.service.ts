// import { Injectable } from '@angular/core';
// import {
//   ActivatedRouteSnapshot,
//   Resolve,
//   Router,
//   RouterStateSnapshot
// } from '@angular/router';
// import { Observable } from 'rxjs/Rx';
//
// import { Project } from '../project.model';
// import { ProjectShowService } from './project-show.service';
//
// @Injectable()
// export class ProjectShowResolver implements Resolve<Project> {
//   constructor(
//     private projectShowService: ProjectShowService,
//     private router: Router
//   ) {}
//
//   resolve(
//     route: ActivatedRouteSnapshot,
//     state: RouterStateSnapshot
//   ): Observable<any> {
//     return this.projectShowService.getProject(route.params['id'])
//       .catch((err) => this.router.navigateByUrls('/'))
//   }
// }
