import {CommonModule} from '@angular/common';
import {ModuleWithProviders, NgModule} from '@angular/core';
import {MatCardModule, MatIconModule, MatInputModule, MatProgressBarModule, MatRippleModule} from '@angular/material';

import {MatPasswordStrengthComponent} from './component/mat-password-strength/mat-password-strength.component';
import {MatPasswordStrengthInfoComponent} from './component/mat-password-strength-info/mat-password-strength-info.component';
import {MatPassToggleVisibilityComponent} from './component/mat-pass-toggle-visibility/mat-pass-toggle-visibility.component';

// Export module's public API
export {MatPasswordStrengthComponent} from './component/mat-password-strength/mat-password-strength.component';
export {
  MatPasswordStrengthInfoComponent
} from './component/mat-password-strength-info/mat-password-strength-info.component';
export {MatPassToggleVisibilityComponent} from './component/mat-pass-toggle-visibility/mat-pass-toggle-visibility.component';

@NgModule({
  imports: [
    CommonModule,
    MatProgressBarModule,
    MatCardModule,
    MatIconModule,
    MatInputModule,
    MatRippleModule
  ],
  exports: [
    MatPasswordStrengthComponent,
    MatPasswordStrengthInfoComponent,
    MatPassToggleVisibilityComponent
  ],
  declarations: [
    MatPasswordStrengthComponent,
    MatPasswordStrengthInfoComponent,
    MatPassToggleVisibilityComponent
  ],
  entryComponents: [MatPassToggleVisibilityComponent]
})
export class MatPasswordStrengthModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: MatPasswordStrengthModule,
      providers: []
    };
  }
}
