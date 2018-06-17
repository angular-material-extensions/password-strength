import {CommonModule} from '@angular/common';
import {NgModule, ModuleWithProviders} from '@angular/core';
import {MatCardModule, MatIconModule, MatProgressBarModule} from '@angular/material';

import {MatPasswordStrengthComponent} from './component/mat-password-strength/mat-password-strength.component';
import {
  MatPasswordStrengthInfoComponent
} from './component/mat-password-strength-info/mat-password-strength-info.component';

// Export module's public API
export {MatPasswordStrengthComponent} from './component/mat-password-strength/mat-password-strength.component';
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
  exports: [MatPasswordStrengthComponent, MatPasswordStrengthInfoComponent],
  declarations: [MatPasswordStrengthComponent, MatPasswordStrengthInfoComponent]
})
export class MatPasswordStrengthModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: MatPasswordStrengthModule,
      providers: []
    };
  }
}
