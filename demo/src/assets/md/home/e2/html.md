```html
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
```
