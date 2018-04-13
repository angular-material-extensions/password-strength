import {CommonModule} from '@angular/common';
import {NgModule, ModuleWithProviders} from '@angular/core';
import {MatProgressBarModule} from '@angular/material';

import {LibComponent} from './component/lib.component';
import {PasswordStrengthComponent} from './component/password-strength/password-strength.component';

// Export module's public API
export {LibComponent} from './component/lib.component';
export {PasswordStrengthComponent} from './component/password-strength/password-strength.component';

@NgModule({
  imports: [
    CommonModule,
    MatProgressBarModule
  ],
  exports: [LibComponent, PasswordStrengthComponent],
  declarations: [LibComponent, PasswordStrengthComponent]
})
export class NgxMaterialPasswordStrengthModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: NgxMaterialPasswordStrengthModule,
      providers: []
    };
  }
}
