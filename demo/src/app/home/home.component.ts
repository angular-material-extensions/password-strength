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

  ts = `import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import {Title} from '@angular/platform-browser';
import {MatSlideToggleChange} from '@angular/material';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class HomeComponent implements OnInit {

  password: string;
  showDetails: boolean;
  showDetails2: boolean;

  viewSource: boolean;
  viewSource2: boolean;
  color = '';

  constructor(private titleService: Title) {
  }

  ngOnInit() {
    this.titleService.setTitle('Home | @angular-material-extensions/password-strength');
  }

  onStrengthChanged(strength: number) {
    console.log('password strength = ', strength);
  }
}
`;

  html1 = `<mat-card fxFlex>
      <mat-card-title>
        @angular-material-extensions/password-strength
      </mat-card-title>
      <mat-card-subtitle>
        stand alone password component
      </mat-card-subtitle>

       <mat-card-subtitle>
          <mat-slide-toggle [(ngModel)]="showDetails">Show Password Details</mat-slide-toggle>
        </mat-card-subtitle>

      <mat-card-content>
        <div fxFlex>

          <!--password input filed-->
          <mat-form-field appearance="outline" style="width: 100%" [color]="passwordComponent.color">
            <mat-label>Password</mat-label>
            <mat-pass-toggle-visibility #toggle matSuffix></mat-pass-toggle-visibility>
            <input matInput #password
                   [type]="toggle.type"
                   required
                   placeholder="Password">
            <mat-hint align="end" aria-live="polite">
              {{password.value.length}} / 25
            </mat-hint>
          </mat-form-field>

          <!--@angular-material-extensions/password-strength's main component-->
          <mat-password-strength #passwordComponent
                                          (onStrengthChanged)="onStrengthChanged($event)"
                                          [password]="password.value">
          </mat-password-strength>

          <!--Password's strength info-->
          <mat-password-strength-info
            *ngIf="showDetails"
            [passwordComponent]="passwordComponent">
          </mat-password-strength-info>

        </div>
      </mat-card-content>
    </mat-card>`;

  html2 = `<mat-card-content fxFlex>

          <!--password input filed-->
          <mat-form-field appearance="outline" style="width: 100%">
            <mat-label>Password</mat-label>
            <input matInput #passwordWithValidation
                   [type]="inputType"
                   required
                   [formControl]="passwordComponentWithValidation.passwordFormControl"
                   placeholder="Password">

            <!--password hint-->
            <mat-hint align="end" aria-live="polite">
              {{passwordWithValidation.value.length}} / 25
            </mat-hint>

            <!--password error msgs-->
            <mat-error *ngIf="passwordComponentWithValidation.passwordFormControl.hasError('required')">
              Password is required
            </mat-error>
            <mat-error *ngIf="passwordComponentWithValidation.passwordFormControl.hasError('pattern')">
              Password is not valid
            </mat-error>

          </mat-form-field>

          <!--@angular-material-extensions/password-strength's main component-->
          <mat-password-strength #passwordComponentWithValidation
                                          (onStrengthChanged)="onStrengthChanged($event)"
                                          [password]="passwordWithValidation.value">
          </mat-password-strength>

          <!--Password's strength info-->
          <mat-password-strength-info
            *ngIf="showDetails2"
            [passwordComponent]="passwordComponentWithValidation">
          </mat-password-strength-info>

      </mat-card-content>`;

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
