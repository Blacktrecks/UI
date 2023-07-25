import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '@auth0/auth0-angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  constructor(public auth: AuthService, private router: Router) {}

  ngOnInit(): void {}

  async login(): Promise<void> {
    // Set the intended redirection route based on the user's role
    const isAdmin = await this.checkIfUserIsAdmin();
    const intendedRoute = isAdmin ? '/admin' : '/userpanel';
    this.auth.loginWithRedirect()
    // ({
    //   appState: { targetRoute: intendedRoute },
    // });
  }

  async checkIfUserIsAdmin(): Promise<boolean> {
    // Implement your logic to check if the user is an admin
    // For example, if your admin email is "adminuser@gmail.com"
    // you can do something like this:
    const user = await this.auth.user$.toPromise();
    const userEmail = user?.email;
    return userEmail === 'adminuser@gmail.com';
  }

  logout(): void {
    this.auth.logout();
  }
}
