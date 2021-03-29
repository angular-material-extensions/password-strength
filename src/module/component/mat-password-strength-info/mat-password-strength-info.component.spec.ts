import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import {MatPasswordStrengthInfoComponent} from './mat-password-strength-info.component';
import {MatCardModule, MatIconModule} from '@angular/material';
import {MatPasswordStrengthComponent} from '../mat-password-strength/mat-password-strength.component';
import {NoopAnimationsModule} from '@angular/platform-browser/animations';
import {By} from '@angular/platform-browser';

describe('NgxMaterialPasswordStrengthInfoComponent', () => {
  let component: MatPasswordStrengthInfoComponent;
  let fixture: ComponentFixture<MatPasswordStrengthInfoComponent>;
  const passwordStrengthComponent: MatPasswordStrengthComponent = new MatPasswordStrengthComponent();

  Object.defineProperty(window.document.body.style, 'backface-visibility', {
    value: () => {
      return {
        enumerable: true,
        configurable: true
      };
    },
  });

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [NoopAnimationsModule, MatCardModule, MatIconModule],
      declarations: [MatPasswordStrengthInfoComponent]
    }).compileComponents();
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

  it('should the input password component be defined', () => {
    expect(component.passwordComponent).toBeDefined();
  });

  it('should render the appropriate div', () => {
    const div = fixture.debugElement.query(By.all());
  });
});
