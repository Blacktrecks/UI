import { Component } from '@angular/core';
import { AuthService } from '@auth0/auth0-angular';
import { tap } from 'rxjs/operators';

@Component({
  selector: 'app-auth-token',
  templateUrl: './auth-token.component.html',
  styleUrls: ['./auth-token.component.css']
})
export class AuthTokenComponent {
  name: string | undefined;

  constructor(private authService: AuthService) {}

  showName() {
    this.authService.user$.pipe(
      tap((user) => {
        if (user) {
          this.name = user.name;
          console.log(this.name);
        }
      })
    ).subscribe();
  }
}
