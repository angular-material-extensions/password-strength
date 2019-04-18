import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {HomeRoutingModule} from './home-routing.module';
import {HomeComponent} from './home.component';
import {AppSharedModule} from '../shared';
import {MatPasswordStrengthModule} from '@angular-material-extensions/password-strength';

@NgModule({
  imports: [
    CommonModule,
    HomeRoutingModule,
    AppSharedModule,
    MatPasswordStrengthModule
  ],
  declarations: [HomeComponent],
})
export class HomeModule {
}
