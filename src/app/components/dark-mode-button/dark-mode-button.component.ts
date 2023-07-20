import { Component, OnInit } from '@angular/core';
import { ThemeService } from 'src/app/services/theme/theme.service';

@Component({
  selector: 'app-dark-mode-button',
  templateUrl: './dark-mode-button.component.html',
  styleUrls: ['./dark-mode-button.component.css']
})
export class DarkModeButtonComponent implements OnInit {
  darkModeEnabled = true;

  constructor(private themeService: ThemeService) { }

  ngOnInit(): void {
    this.darkModeEnabled = this.themeService.isDarkMode();
  }

  toggleDarkMode(): void {
    this.darkModeEnabled = !this.darkModeEnabled;
    this.themeService.setDarkMode(this.darkModeEnabled);
  }
}
