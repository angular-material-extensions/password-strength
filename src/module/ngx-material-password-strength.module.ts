import {CommonModule} from '@angular/common';
import {NgModule, ModuleWithProviders} from '@angular/core';
import {MatCardModule, MatIconModule, MatProgressBarModule} from '@angular/material';

import {PasswordStrengthComponent} from './component/ngx-material-password-strength/password-strength.component';
import {
  NgxMaterialPasswordStrengthInfoComponent
} from './component/ngx-material-password-strength-info/ngx-material-password-strength-info.component';

// Export module's public API
export {PasswordStrengthComponent} from './component/ngx-material-password-strength/password-strength.component';
export {
  NgxMaterialPasswordStrengthInfoComponent
} from './component/ngx-material-password-strength-info/ngx-material-password-strength-info.component';


@NgModule({
  imports: [
    CommonModule,
    MatProgressBarModule,
    MatCardModule,
    MatIconModule
  ],
  exports: [PasswordStrengthComponent, NgxMaterialPasswordStrengthInfoComponent],
  declarations: [PasswordStrengthComponent, NgxMaterialPasswordStrengthInfoComponent]
})
export class NgxMaterialPasswordStrengthModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: NgxMaterialPasswordStrengthModule,
      providers: []
    };
  }
}
