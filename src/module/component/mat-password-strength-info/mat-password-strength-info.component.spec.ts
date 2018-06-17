import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {MatPasswordStrengthInfoComponent} from './mat-password-strength-info.component';
import {MatCardModule, MatIconModule} from '@angular/material';
import {PasswordStrengthComponent} from '../ngx-material-password-strength/password-strength.component';

describe('NgxMaterialPasswordStrengthInfoComponent', () => {
  let component: MatPasswordStrengthInfoComponent;
  let fixture: ComponentFixture<MatPasswordStrengthInfoComponent>;
  const passwordStrengthComponent: PasswordStrengthComponent = new PasswordStrengthComponent();

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [MatCardModule, MatIconModule],
      declarations: [MatPasswordStrengthInfoComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MatPasswordStrengthInfoComponent);
    component = fixture.componentInstance;
    component.passwordComponent = passwordStrengthComponent;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
