import {Component, Input, OnInit} from '@angular/core';
import {PasswordStrengthComponent} from '../ngx-material-password-strength/password-strength.component';

@Component({
  selector: 'ngx-material-password-strength-info',
  templateUrl: './ngx-material-password-strength-info.component.html',
  styleUrls: ['./ngx-material-password-strength-info.component.scss']
})
export class NgxMaterialPasswordStrengthInfoComponent implements OnInit {

  @Input()
  passwordComponent: PasswordStrengthComponent;

  constructor() {
  }

  ngOnInit() {
  }

}
