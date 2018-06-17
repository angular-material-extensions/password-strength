import {CommonModule} from '@angular/common';
import {NgModule, ModuleWithProviders} from '@angular/core';
import {MatCardModule, MatIconModule, MatProgressBarModule} from '@angular/material';

import {PasswordStrengthComponent} from './component/ngx-material-password-strength/password-strength.component';
import {
  MatPasswordStrengthInfoComponent
} from './component/mat-password-strength-info/mat-password-strength-info.component';

// Export module's public API
export {PasswordStrengthComponent} from './component/ngx-material-password-strength/password-strength.component';
export {
  MatPasswordStrengthInfoComponent
} from './component/mat-password-strength-info/mat-password-strength-info.component';


@NgModule({
  imports: [
    CommonModule,
    MatProgressBarModule,
    MatCardModule,
    MatIconModule
  ],
  exports: [PasswordStrengthComponent, MatPasswordStrengthInfoComponent],
  declarations: [PasswordStrengthComponent, MatPasswordStrengthInfoComponent]
})
export class MatPasswordStrengthModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: MatPasswordStrengthModule,
      providers: []
    };
  }
}
