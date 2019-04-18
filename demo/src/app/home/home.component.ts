import {AfterViewInit, ChangeDetectionStrategy, Component, OnInit, ViewChild, ViewEncapsulation} from '@angular/core';
import {Title} from '@angular/platform-browser';
import {MatPasswordStrengthComponent} from '@angular-material-extensions/password-strength';
import {FormControl, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HomeComponent implements OnInit, AfterViewInit {

  @ViewChild('passwordComponentWithValidation')
  passwordComponentWithValidation2: MatPasswordStrengthComponent;

  formGroup: FormGroup;
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
    // this.passwordFormControl = this.passwordComponentWithValidation2.passwordFormControl;
    // this.passwordFormControl = new FormControl('', this.passwordComponentWithValidation2.Validators);
    // console.log('passwordFormControl form control = ', this.passwordFormControl);

    this.passwordComponentWithValidation2.passwordFormControl.valueChanges.subscribe(() => {
      console.log('passwordFormControl form control = ', this.passwordComponentWithValidation2.passwordFormControl);
    });

    // this.passwordFormControl.valueChanges.subscribe(value => {
    //   console.log('passwordFormControl form control = ', this.passwordFormControl);
    // });

    // @ts-ignore
    this.formGroup = new FormGroup({
      'password': this.passwordComponentWithValidation2.passwordFormControl
    });
  }

  onStrengthChanged(strength: number) {
    // console.log('password strength = ', strength);
  }

  ngAfterViewInit(): void {
    // console.log('pass comp on ngAfterViewInit', this.passwordComponentWithValidation2);
  }

  // validate(): ValidatorFn {
  //   const validator = (control: AbstractControl): { [key: string]: any } => {
  //     // this.isUndefinedOrEmpty(control);
  //     console.log('validate', !RegExpValidator.lowerCase.test(control.value));
  //     // control.setErrors({test: true});
  //     if (!RegExpValidator.lowerCase.test(control.value)) {
  //       return {
  //         'lowerCase': true
  //       };
  //     }
  //     return undefined;
  //   };
  //   return validator;
  // }

}
