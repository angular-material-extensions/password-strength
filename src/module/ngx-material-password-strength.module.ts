import {CommonModule} from '@angular/common';
import {NgModule, ModuleWithProviders} from '@angular/core';
import {MatProgressBarModule} from '@angular/material';

import {LibComponent} from './component/lib.component';

// Export module's public API
export {LibComponent} from './component/lib.component';

@NgModule({
  imports: [
    CommonModule,
    MatProgressBarModule
  ],
  exports: [LibComponent],
  declarations: [LibComponent]
})
export class NgxMaterialPasswordStrengthModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: NgxMaterialPasswordStrengthModule,
      providers: []
    };
  }
}
