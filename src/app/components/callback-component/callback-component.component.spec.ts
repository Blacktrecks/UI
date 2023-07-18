import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CallbackComponentComponent } from './callback-component.component';

describe('CallbackComponentComponent', () => {
  let component: CallbackComponentComponent;
  let fixture: ComponentFixture<CallbackComponentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CallbackComponentComponent]
    });
    fixture = TestBed.createComponent(CallbackComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
