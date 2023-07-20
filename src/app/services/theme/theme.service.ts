import { Injectable } from '@angular/core';
import { OverlayContainer } from '@angular/cdk/overlay';

@Injectable({
  providedIn: 'root'
})
export class ThemeService {
  private isDarkModeEnabled = false;
  private readonly darkModeClass = 'dark-theme';

  constructor(private overlayContainer: OverlayContainer) {}

  isDarkMode(): boolean {
    return this.isDarkModeEnabled;
  }

  setDarkMode(enabled: boolean): void {
    this.isDarkModeEnabled = enabled;
    if (enabled) {
      this.overlayContainer.getContainerElement().classList.add(this.darkModeClass);
    } else {
      this.overlayContainer.getContainerElement().classList.remove(this.darkModeClass);
    }
  }
}
