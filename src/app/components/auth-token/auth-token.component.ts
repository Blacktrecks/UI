import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '@auth0/auth0-angular';
import { tap } from 'rxjs/operators';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Subscription, from } from 'rxjs';

@Component({
  selector: 'app-auth-token',
  templateUrl: './auth-token.component.html',
  styleUrls: ['./auth-token.component.css']
})
export class AuthTokenComponent implements OnInit, OnDestroy {
  name: string | undefined;
  idTokenClaimsSubscription: Subscription | undefined;

  constructor(private authService: AuthService, private router: Router, private snackBar: MatSnackBar) {}

  ngOnInit(): void {
    this.handleUserLogin();
  }

  ngOnDestroy(): void {
    if (this.idTokenClaimsSubscription) {
      this.idTokenClaimsSubscription.unsubscribe();
    }
  }

  async handleUserLogin() {
    try {
      const claims = await this.authService.idTokenClaims$.pipe(tap((claims) => {
        if (claims) {
          const isAdmin = this.checkIfUserIsAdmin(claims);
          this.showName();
          this.showWelcomeSnackBar(this.name!);

          if (isAdmin) {
            this.router.navigate(['/adminpanel']); // Redirect to the admin panel
          } else {
            this.router.navigate(['/userpanel']); // Redirect to the user panel
          }
        }
      })).toPromise();

      if (!claims) {
        // User is not logged in or no claims found, redirect to login
        this.router.navigate(['/login']);
      }
    } catch (error) {
      console.error('Error while processing user login:', error);
    }
  }

  showName() {
    this.authService.user$.pipe(
      tap((user) => {
        if (user) {
          this.name = user.name!;
        }
      })
    ).subscribe();
  }

  private showWelcomeSnackBar(name: string) {
    this.snackBar.open(`Welcome, ${name}!`, 'Close', {
      duration: 3000,
    });
  }

  private checkIfUserIsAdmin(claims: any): boolean {
    // List of admin emails
    const adminEmails = ['adminuser@gmail.com', 'anotheradmin@example.com', /* Add more admin emails if needed */];

    // Get the user's email from the claims object
    const userEmail = claims?.['email'];

    // Check if the user's email is in the list of admin emails
    const isAdmin = adminEmails.includes(userEmail);

    return isAdmin;
  }
}
