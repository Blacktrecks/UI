import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '@auth0/auth0-angular';
import { Observable, map } from 'rxjs';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  constructor(public auth: AuthService, private router: Router) {}

  ngOnInit(): void {}

  login() {
    // Set the intended redirection route based on the user's role
    this.auth.loginWithRedirect
      ({
       appState: { targetRoute: '/userpanel' },
      });
    
     
  }

  checkIfUserIsAdmin(): Observable<boolean> {
    // Implement your logic to check if the user is an admin
    // For example, if your admin email is "adminuser@gmail.com"
    // you can do something like this:
    return this.auth.user$.pipe(
      map(user => {
      const userEmail = user?.email;
      return userEmail === 'adminuser@gmail.com';
    }))
  }

  logout(): void {
    this.auth.logout();
    this.router.navigate([""])
  }
}
