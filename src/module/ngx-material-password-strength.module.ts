import {CommonModule} from '@angular/common';
import {NgModule, ModuleWithProviders} from '@angular/core';
import {MatProgressBarModule} from '@angular/material';

import {PasswordStrengthComponent} from './component/password-strength/password-strength.component';

// Export module's public API
export {PasswordStrengthComponent} from './component/password-strength/password-strength.component';

@NgModule({
  imports: [
    CommonModule,
    MatProgressBarModule
  ],
  exports: [PasswordStrengthComponent],
  declarations: [PasswordStrengthComponent]
})
export class NgxMaterialPasswordStrengthModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: NgxMaterialPasswordStrengthModule,
      providers: []
    };
  }
}
