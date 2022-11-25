import {CommonModule} from '@angular/common';
import {ModuleWithProviders, NgModule} from '@angular/core';
import {MatIconModule} from '@angular/material/icon';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import {MatCardModule} from '@angular/material/card';
import {MatPassToggleVisibilityComponent, MatPasswordStrengthComponent, MatPasswordStrengthInfoComponent} from './component';
import {MatRippleModule} from '@angular/material/core';
import {MatButtonModule} from '@angular/material/button';

// validator
export {RegExpValidator} from './validator/regexp.class';

@NgModule({
  imports: [
    CommonModule,
    MatProgressBarModule,
    MatButtonModule,
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
