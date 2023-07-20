import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Auth0ServiceComponent } from './auth0-service.component';

describe('Auth0ServiceComponent', () => {
  let component: Auth0ServiceComponent;
  let fixture: ComponentFixture<Auth0ServiceComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Auth0ServiceComponent]
    });
    fixture = TestBed.createComponent(Auth0ServiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
