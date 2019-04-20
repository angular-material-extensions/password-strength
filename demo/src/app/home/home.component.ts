import {ChangeDetectionStrategy, Component, OnInit, ViewChild, ViewEncapsulation} from '@angular/core';
import {Title} from '@angular/platform-browser';
import {MatPasswordStrengthComponent} from '@angular-material-extensions/password-strength';
import {FormControl} from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HomeComponent implements OnInit {

  @ViewChild('passwordComponentWithValidation')
  passwordComponentWithValidation2: MatPasswordStrengthComponent;

  passwordFormControl: FormControl;
  x: FormControl;

  constructor(private titleService: Title) {
  }

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
    this.titleService.setTitle('Home | mat-password-strength');

    this.passwordComponentWithValidation2.passwordFormControl.valueChanges.subscribe(() => {
      console.log('passwordFormControl form control = ', this.passwordComponentWithValidation2.passwordFormControl);
    });

    this.passwordComponentWithValidation2.passwordConfirmationFormControl.valueChanges.subscribe(() => {
      console.log('passwordFormControl form control = ', this.passwordComponentWithValidation2.passwordConfirmationFormControl);
    });

  }

  onStrengthChanged(strength: number) {
    // console.log('password strength = ', strength);
  }


}
