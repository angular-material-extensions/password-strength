import {ChangeDetectionStrategy, Component, OnInit, ViewChild, ViewEncapsulation} from '@angular/core';
import {Title} from '@angular/platform-browser';
import {MatPasswordStrengthComponent} from '@angular-material-extensions/password-strength';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HomeComponent implements OnInit {

  @ViewChild('passwordComponentWithConfirmation')
  passwordComponentWithConfirmation: MatPasswordStrengthComponent;

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
