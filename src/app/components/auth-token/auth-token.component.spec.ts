import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AuthTokenComponent } from './auth-token.component';
import { AuthService } from '@auth0/auth0-angular';
import { of } from 'rxjs';

describe('AuthTokenComponent', () => {
  let component: AuthTokenComponent;
  let fixture: ComponentFixture<AuthTokenComponent>;
  let authService: AuthService;

  beforeEach(async () => {
    const authServiceMock = {
      user$: of({ name: 'John Doe' })
    };

    await TestBed.configureTestingModule({
      declarations: [AuthTokenComponent],
      providers: [{ provide: AuthService, useValue: authServiceMock }]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AuthTokenComponent);
    component = fixture.componentInstance;
    authService = TestBed.inject(AuthService);
    fixture.detectChanges();
  });

  it('should create the component', () => {
    expect(component).toBeTruthy();
  });

  it('should set the name when calling showName()', () => {
    spyOn(authService.user$, 'pipe').and.returnValue(of({ name: 'John Doe' }));
    component.showName();
    expect(component.name).toBe('John Doe');
  });
});
