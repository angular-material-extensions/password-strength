import {CommonModule} from '@angular/common';
import {ModuleWithProviders, NgModule} from '@angular/core';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import {MatRippleModule} from '@angular/material/core';
import {MatCardModule} from '@angular/material/card';
import {MatIconModule} from '@angular/material/icon';

import {MatPassToggleVisibilityComponent, MatPasswordStrengthComponent, MatPasswordStrengthInfoComponent} from './component';


// Export module's public API
// export {MatPasswordStrengthComponent} from './component/mat-password-strength/mat-password-strength.component';
// export {
//   MatPasswordStrengthInfoComponent
// } from './component/mat-password-strength-info/mat-password-strength-info.component';
// export {MatPassToggleVisibilityComponent} from './component/mat-pass-toggle-visibility/mat-pass-toggle-visibility.component';
// export {MatPasswordStrengthValidator} from './validator/mat-password-strength-validator';
// validator
export {RegExpValidator} from './validator/regexp.class';

@NgModule({
  imports: [
    CommonModule,
    MatProgressBarModule,
    MatCardModule,
    MatIconModule,
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
  ]
})
export class MatPasswordStrengthModule {
  static forRoot(): ModuleWithProviders<MatPasswordStrengthModule> {
    return {
      ngModule: MatPasswordStrengthModule,
      providers: []
    };
  }
}
