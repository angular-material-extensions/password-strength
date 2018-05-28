import {Component, OnInit, ViewEncapsulation} from '@angular/core';
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
  inputType = 'password';
  showDetails: boolean;
  showDetails2: boolean;

  viewSource: boolean;
  viewSource2: boolean;
  color = '';

  constructor(private titleService: Title) {
  }

  ngOnInit() {
    this.titleService.setTitle('Home | ngx-material-password-strength');
  }

  onStrengthChanged(strength: number) {
    console.log('password strength = ', strength);
  }

  onSlideToggleChange(event: MatSlideToggleChange) {
    event.checked ? this.inputType = 'text' : this.inputType = 'password';
  }

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
  inputType = 'password';
  showDetails: boolean;
  showDetails2: boolean;

  viewSource: boolean;
  viewSource2: boolean;
  color = '';

  constructor(private titleService: Title) {
  }

  ngOnInit() {
    this.titleService.setTitle('Home | ngx-material-password-strength');
  }

  onStrengthChanged(strength: number) {
    console.log('password strength = ', strength);
  }

  onSlideToggleChange(event: MatSlideToggleChange) {
    event.checked ? this.inputType = 'text' : this.inputType = 'password';
  }
}
`;

  html1 = `<mat-card fxFlex>
      <mat-card-title>
        ngx-material-password-strength
      </mat-card-title>
      <mat-card-subtitle>
        stand alone password component
      </mat-card-subtitle>

      <mat-card-subtitle fxLayout="row" fxLayoutGap="10px">
        <mat-slide-toggle (change)="onSlideToggleChange($event)">Show Password</mat-slide-toggle>
        <mat-slide-toggle [(ngModel)]="showDetails">Show Password Details</mat-slide-toggle>
      </mat-card-subtitle>

      <mat-card-content>
        <div fxFlex>

          <!--password input filed-->
          <mat-form-field appearance="outline" style="width: 100%" [color]="passwordComponent.color">
            <mat-label>Password</mat-label>
            <input matInput #password
                   [type]="inputType"
                   required
                   placeholder="Password">
            <mat-hint align="end" aria-live="polite">
              {{password.value.length}} / 25
            </mat-hint>
          </mat-form-field>

          <!--ngx-material-password-strength's main component-->
          <ngx-material-password-strength #passwordComponent
                                          (onStrengthChanged)="onStrengthChanged($event)"
                                          [password]="password.value">
          </ngx-material-password-strength>

          <!--Password's strength info-->
          <ngx-material-password-strength-info
            *ngIf="showDetails"
            [passwordComponent]="passwordComponent">
          </ngx-material-password-strength-info>

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

          <!--ngx-material-password-strength's main component-->
          <ngx-material-password-strength #passwordComponentWithValidation
                                          (onStrengthChanged)="onStrengthChanged($event)"
                                          [password]="passwordWithValidation.value">
          </ngx-material-password-strength>

          <!--Password's strength info-->
          <ngx-material-password-strength-info
            *ngIf="showDetails2"
            [passwordComponent]="passwordComponentWithValidation">
          </ngx-material-password-strength-info>

      </mat-card-content>`;

}
