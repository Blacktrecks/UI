import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService, LogoutOptions } from '@auth0/auth0-angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  constructor(public auth: AuthService, private router: Router) {}

  ngOnInit(): void {}

  login(): void {
    this.auth.loginWithRedirect().subscribe(() => {
      this.router.navigate(['/userpanel']); // Replace '/main' with your desired main page route
    });
  }
  logout(): void{
    this.auth.logout();
  }
}
