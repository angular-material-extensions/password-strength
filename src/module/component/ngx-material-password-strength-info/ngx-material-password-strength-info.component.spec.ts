import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {NgxMaterialPasswordStrengthInfoComponent} from './ngx-material-password-strength-info.component';
import {MatCardModule, MatIconModule} from '@angular/material';
import {PasswordStrengthComponent} from '../ngx-material-password-strength/password-strength.component';

describe('NgxMaterialPasswordStrengthInfoComponent', () => {
  let component: NgxMaterialPasswordStrengthInfoComponent;
  let fixture: ComponentFixture<NgxMaterialPasswordStrengthInfoComponent>;
  const passwordStrengthComponent: PasswordStrengthComponent = new PasswordStrengthComponent();

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [MatCardModule, MatIconModule],
      declarations: [NgxMaterialPasswordStrengthInfoComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgxMaterialPasswordStrengthInfoComponent);
    component = fixture.componentInstance;
    component.passwordComponent = passwordStrengthComponent;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
