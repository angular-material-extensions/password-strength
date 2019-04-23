```html
<!--password input filed-->
<mat-form-field appearance="outline" style="width: 100%">
  <mat-label>Password</mat-label>
  <mat-pass-toggle-visibility #toggle3 matSuffix></mat-pass-toggle-visibility>
  <input matInput #passwordWithConfirmation
         [type]="toggle3.type"
         [formControl]="passwordComponentWithConfirmation.passwordFormControl"
         placeholder="Password"
         required>
         
  <!--password hint-->
  <mat-hint align="end" aria-live="polite">
    {{passwordWithConfirmation.value.length}} / {{passwordComponentWithConfirmation.max}}
  </mat-hint>
  
<!--  Error Messages  -->
  <mat-error *ngIf="passwordComponentWithConfirmation.passwordFormControl.hasError('required')">
    Password is required
  </mat-error>
  <mat-error *ngIf="passwordComponentWithConfirmation.passwordFormControl.hasError('pattern')">
    Password is not valid
  </mat-error>
</mat-form-field>

<!--@angular-material-extensions/password-strength's main component-->
<mat-password-strength #passwordComponentWithConfirmation
                       (onStrengthChanged)="onStrengthChanged($event)"
                       [password]="passwordWithConfirmation.value">
</mat-password-strength>

<!--Password's strength info-->
<mat-password-strength-info
  *ngIf="showDetails3"
  [passwordComponent]="passwordComponentWithConfirmation">
</mat-password-strength-info>

<!--password input field for confirmation-->
<mat-form-field appearance="outline" class="mt-3" style="width: 100%">
  <mat-label>Confirm Password</mat-label>
  <mat-pass-toggle-visibility #toggleConfirmPassword matSuffix></mat-pass-toggle-visibility>
  <input matInput #passwordToConfirm
         [type]="toggleConfirmPassword.type"
         [formControl]="passwordComponentWithConfirmation.passwordConfirmationFormControl"
         placeholder="Password">
         
  <!-- password hint-->
  <mat-hint align="end" aria-live="polite">
    {{passwordToConfirm.value.length}} / {{passwordComponentWithConfirmation.max}}
  </mat-hint>
  
  <!-- password error msgs-->
  <mat-error *ngIf="passwordComponentWithConfirmation.passwordConfirmationFormControl.hasError('required')">
    Password confirmation is required
  </mat-error>
  <mat-error
    *ngIf="passwordComponentWithConfirmation.passwordConfirmationFormControl.hasError('notConfirmed')">
    Password is not the same
  </mat-error>
</mat-form-field>
```
