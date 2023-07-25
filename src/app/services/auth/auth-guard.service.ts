import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { AuthService } from '@auth0/auth0-angular';
import { Observable, of } from 'rxjs';
import { map, catchError, switchMap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private auth: AuthService, private router: Router) {}

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    return this.auth.isAuthenticated$.pipe(
      switchMap(isAuthenticated => {
        if (isAuthenticated) {
          // Get the user's ID token claims to check for the email
          return this.auth.idTokenClaims$.pipe(
            map(idTokenClaims => {
              const userEmail = idTokenClaims?.['email'];
              const isAdmin = this.checkIfUserIsAdmin(userEmail);

              if (isAdmin) {
                return true;
              } else {
                return this.router.parseUrl('/userpanel');
              }
            }),
            catchError(() => {
              // Handle error if unable to get ID token claims
              return of(this.router.parseUrl('/login'));
            })
          );
        } else {
          // Redirect to login page if not authenticated
          return of(this.router.parseUrl('/login'));
        }
      })
    );
  }

  checkIfUserIsAdmin(userEmail: string | undefined): boolean {
    // Implement your logic to check if the user is an admin
    // For example, if your admin email is "adminuser@gmail.com"
    // you can do something like this:
    return userEmail === 'adminuser@gmail.com';
  }
}
