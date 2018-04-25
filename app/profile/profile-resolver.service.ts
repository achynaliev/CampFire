import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  Resolve,
  Router,
  RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs/Rx';

import { Profile } from './profile.model';
import { ProfileService } from './profile.service';

@Injectable()
export class ProfileResolver implements Resolve<Profile> {
  constructor(
    private profileService: ProfileService,
    private router: Router
  ) {}

  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<any> {
    return this.profileService.getProfile(route.params['username'])
              .catch((err) => this.router.navigateByUrl('/'))
  }
}
