```html
 <!--password input filed-->
  <mat-form-field appearance="outline" [color]="passwordComponentWithValidation.color" style="width: 100%">
    <mat-label>Password</mat-label>
    <mat-pass-toggle-visibility #toggle matSuffix></mat-pass-toggle-visibility>
    <input matInput #passwordWithValidation
           [type]="toggle.type"
           required
           [formControl]="passwordComponentWithValidation.passwordFormControl"
           placeholder="Password">

     <!--password hint-->
     <mat-hint align="end" aria-live="polite">
       {{passwordWithValidation.value.length}} / {{passwordComponentWithValidation.max}}
     </mat
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
     </mat-password-str   
     <!--Password's strength info-->
     <mat-password-strength-info
       *ngIf="showDetails"
       [passwordComponent]="passwordComponentWithValidation">
     </mat-password-strength  
```
