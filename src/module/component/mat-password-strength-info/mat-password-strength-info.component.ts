import {Component, Input, OnInit} from '@angular/core';
import {MatPasswordStrengthComponent} from '../mat-password-strength/mat-password-strength.component';

@Component({
  selector: 'mat-password-strength-info',
  templateUrl: './mat-password-strength-info.component.html',
  styleUrls: ['./mat-password-strength-info.component.scss']
})
export class MatPasswordStrengthInfoComponent implements OnInit {

  @Input()
  passwordComponent: MatPasswordStrengthComponent;

  constructor() {
  }

  ngOnInit() {
  }

}
