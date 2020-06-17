import {Component, OnInit, ViewChild} from '@angular/core';
import {MatPasswordStrengthComponent} from '@angular-material-extensions/password-strength';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  @ViewChild('passwordComponentWithConfirmation', {static: true})
  passwordComponentWithConfirmation: MatPasswordStrengthComponent;

  title = 'password-strength';

  password: string;
  showDetails: boolean;
  showDetails2: boolean;
  showDetails3: boolean;

  viewSource: boolean;
  viewSource2: boolean;
  viewSource3: boolean;
  color = '';

  ngOnInit() {
    console.log('home on init');

    this.passwordComponentWithConfirmation.passwordFormControl.valueChanges.subscribe(() => {
      console.log('passwordFormControl form control = ', this.passwordComponentWithConfirmation.passwordFormControl);
    });

    this.passwordComponentWithConfirmation.passwordConfirmationFormControl.valueChanges.subscribe(() => {
      console.log('passwordFormControl form control = ', this.passwordComponentWithConfirmation.passwordConfirmationFormControl);
    });

  }

  onStrengthChanged(strength: number) {
    // console.log('password strength = ', strength);
  }

}
