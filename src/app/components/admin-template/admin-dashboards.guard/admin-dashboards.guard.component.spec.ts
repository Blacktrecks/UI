// Corrected test file: admin-dashboard.guard.component.spec.ts

import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AdminDashboardsGuardComponent } from './admin-dashboards.guard.component'; // Update the import to the correct component name

describe('AdminDashboardGuardComponent', () => {
  let component: AdminDashboardsGuardComponent;
  let fixture: ComponentFixture<AdminDashboardsGuardComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AdminDashboardsGuardComponent],
    });
    fixture = TestBed.createComponent(AdminDashboardsGuardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
