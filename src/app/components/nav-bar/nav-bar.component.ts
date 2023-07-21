import { Component,OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { AuthService } from '@auth0/auth0-angular';
import { NavbarToggleService } from 'src/app/services/navbar-toggle.service';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent {
  showNavbar!: boolean;

  ngOnInit(): void {
    this.showNavbar = this.navbarToogleService.getShowNavbar();

    // Subscribe to router events to detect navigation changes
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        // Hide the navbar if the current route is '/admin'
        this.showNavbar = !this.router.url.includes('/admin');
        this.navbarToogleService.setShowNavbar(this.showNavbar);
      }
    });
  }


constructor(public auth: AuthService, private navbarToogleService: NavbarToggleService , private router: Router) {}


// navigateToAdminSection() {
//   // ... navigate to the admin section logic
//   this.navbarToogleService.setShowNavbar(false); // Hide the navbar when navigating to admin
// }

// navigateToOtherSection() {
//   // ... navigate to other sections logic
//   this.navbarToogleService.setShowNavbar(true); // Show the navbar when navigating to other sections
// }
}
