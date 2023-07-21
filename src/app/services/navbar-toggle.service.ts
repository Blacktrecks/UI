import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NavbarToggleService {
  private showNavbar = true;

  setShowNavbar(value: boolean): void {
    this.showNavbar = value;
  }

  getShowNavbar(): boolean {
    return this.showNavbar;
  }
}
