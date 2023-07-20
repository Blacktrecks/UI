import { Component } from '@angular/core';
import { AuthService } from '@auth0/auth0-angular';

@Component({
  selector: 'app-auth0-service',
  templateUrl: './auth0-service.component.html',
  styleUrls: ['./auth0-service.component.css']
})
export class Auth0Service {
 /**
  *
  */
 constructor(private authService: AuthService) {
 
 }

 getUserData()
 {
  return this.authService.user$
 }
}
