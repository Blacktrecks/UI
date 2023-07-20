import { Component } from '@angular/core';
import { AuthService } from '@auth0/auth0-angular';
import { tap } from 'rxjs/operators';
import { MatSnackBar } from '@angular/material/snack-bar'; // Import MatSnackBar

@Component({
  selector: 'app-auth-token',
  templateUrl: './auth-token.component.html',
  styleUrls: ['./auth-token.component.css']
})
export class AuthTokenComponent {
  name: string | undefined;

  constructor(private authService: AuthService, private snackBar: MatSnackBar) {} // Inject MatSnackBar

  showName() {
    this.authService.user$.pipe(
      tap((user) => {
        if (user) {
          this.name = user.name!;
          this.showNameSnackBar(this.name); // Show the name as a snack bar
        }
      })
    ).subscribe();
  }

  private showNameSnackBar(name: string) {
    this.snackBar.open(`Welcome, ${name}!`, 'Close', {
      duration: 3000, // Set the duration for the snack bar in milliseconds (3 seconds)
    });
  }
}
