import { Component } from '@angular/core';
import { DarkModeService } from 'src/app/services/dark-mode.service';


@Component({
  selector: 'app-dark-mode-button',
  templateUrl: './dark-mode-button.component.html',
  styleUrls: ['./dark-mode-button.component.css']
})
export class DarkModeButtonComponent {
  constructor(private darkModeService: DarkModeService) {}

  toggleDarkMode(): void {
    this.darkModeService.toggleDarkMode();
  }
}
