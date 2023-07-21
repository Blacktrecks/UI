import { Component } from '@angular/core';
import { NavbarToggleService } from 'src/app/services/navbar-toggle.service';

@Component({
  selector: 'app-main-panel',
  templateUrl: './main-panel.component.html',
  styleUrls: ['./main-panel.component.css']
})
export class MainPanelComponent {
  constructor(private navbarToggleService: NavbarToggleService) {
    this.navbarToggleService.setShowNavbar(false);
  }
}
