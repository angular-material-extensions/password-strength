import {Component, OnInit, ViewChild} from '@angular/core';
import {MatPasswordStrengthComponent} from '@angular-material-extensions/password-strength';
import {UntypedFormControl, UntypedFormGroup} from '@angular/forms';

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
  showDetails4: boolean;

  viewSource: boolean;
  viewSource2: boolean;
  viewSource3: boolean;
  viewSource4: boolean;
  color = '';

  passwordFormGroup: UntypedFormGroup;

  ngOnInit() {
    console.log('home on init');

    this.passwordComponentWithConfirmation.passwordFormControl.valueChanges.subscribe(() => {
      console.log('passwordFormControl form control = ', this.passwordComponentWithConfirmation.passwordFormControl);
    });

    this.passwordComponentWithConfirmation.passwordConfirmationFormControl.valueChanges.subscribe(() => {
      console.log('passwordFormControl form control = ', this.passwordComponentWithConfirmation.passwordConfirmationFormControl);
    });

    this.passwordFormGroup = new UntypedFormGroup({
      password: new UntypedFormControl()
    });


    this.passwordFormGroup
      .get('password')
      .valueChanges
      .subscribe(value => console.log('Reactive Forms --> password value (strength 0-100) -->', value));
  }

  onStrengthChanged(strength: number) {
    // console.log('password strength = ', strength);
  }

}
