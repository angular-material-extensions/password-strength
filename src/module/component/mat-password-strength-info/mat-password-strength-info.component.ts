import {Component, Input, OnInit} from '@angular/core';
import {PasswordStrengthComponent} from '../ngx-material-password-strength/password-strength.component';

@Component({
  selector: 'mat-password-strength-info',
  templateUrl: './mat-password-strength-info.component.html',
  styleUrls: ['./mat-password-strength-info.component.scss']
})
export class MatPasswordStrengthInfoComponent implements OnInit {

  @Input()
  passwordComponent: PasswordStrengthComponent;

  constructor() {
  }

  ngOnInit() {
  }

}
