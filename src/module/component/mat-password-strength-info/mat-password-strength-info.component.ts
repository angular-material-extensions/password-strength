import {Component, Input} from '@angular/core';
import {MatPasswordStrengthComponent} from '../mat-password-strength/mat-password-strength.component';

@Component({
  selector: 'mat-password-strength-info',
  exportAs: 'matPasswordStrengthInfo',
  templateUrl: './mat-password-strength-info.component.html',
  styleUrls: ['./mat-password-strength-info.component.scss']
})
export class MatPasswordStrengthInfoComponent {

  @Input()
  passwordComponent: MatPasswordStrengthComponent;

}
