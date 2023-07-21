import { Component } from '@angular/core';
import { NavbarToggleService } from 'src/app/services/navbar-toggle.service';

@Component({
  selector: 'app-user-panel',
  templateUrl: './user-panel.component.html',
  styleUrls: ['./user-panel.component.css']
})
export class UserPanelComponent {
  constructor(private navbarToggleService: NavbarToggleService) {
    this.navbarToggleService.setShowNavbar(false);
  }
}
