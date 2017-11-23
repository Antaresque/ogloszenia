import { Injectable } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs/Observable';

import { UserService } from './../user/user.service';

@Injectable()
export class AuthGuard implements CanActivate {
  constructor(private router: Router, private user: UserService) {}

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    if (this.user.checkLoggedIn()) {
        // logged in so return true
        return true;
    }
    else{
      this.router.navigate(['/auth/login']);
      return false;
    }
    // not logged in so redirect to login page

  }
}
