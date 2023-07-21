import { Component } from '@angular/core';
import { NavbarToggleService } from 'src/app/services/navbar-toggle.service';


@Component({
  selector: 'app-admin-panel',
  templateUrl: './admin-panel.component.html',
  styleUrls: ['./admin-panel.component.css']
})
export class AdminPanelComponent {
  constructor(private navbarToggleService: NavbarToggleService) {
    this.navbarToggleService.setShowNavbar(false);
  }
}
