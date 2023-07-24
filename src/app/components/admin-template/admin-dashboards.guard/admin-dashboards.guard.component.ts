// admin-dashboard.guard.ts
import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '@auth0/auth0-angular';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class AdminDashboardsGuardComponent implements CanActivate {
  constructor(private auth: AuthService) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean | UrlTree> {
    return this.auth.user$.pipe(
      map((user) => {
        // Check if the user is an admin (based on the isAdmin property set in the App Metadata)
        const isAdmin = user && user['isAdmin'] === true;
        return isAdmin ? true : false;
      })
    );
  }
}
