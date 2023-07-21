import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { AuthService } from '@auth0/auth0-angular';
import { NavbarToggleService } from 'src/app/services/navbar-toggle.service';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {
  showNavbar!: boolean;

  constructor(
    public auth: AuthService,
    private router: Router,
    private navbarToggleService: NavbarToggleService
  ) {}

  ngOnInit(): void {
    this.showNavbar = this.navbarToggleService.getShowNavbar();

    // Subscribe to router events to detect navigation changes
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        // Hide the navbar for specific routes
        this.showNavbar = !this.shouldHideNavbar(this.router.url);
        this.navbarToggleService.setShowNavbar(this.showNavbar);
      }
    });
  }

  shouldHideNavbar(url: string): boolean {
    // Add the routes where you want to hide the navbar
    return url.includes('/admin') || url.includes('/userpanel');
  }
}




// navigateToAdminSection() {
//   // ... navigate to the admin section logic
//   this.navbarToogleService.setShowNavbar(false); // Hide the navbar when navigating to admin
// }

// navigateToOtherSection() {
//   // ... navigate to other sections logic
//   this.navbarToogleService.setShowNavbar(true); // Show the navbar when navigating to other sections
// }

