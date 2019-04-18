import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {HomeRoutingModule} from './home-routing.module';
import {HomeComponent} from './home.component';
import {AppSharedModule} from '../shared';
import {MatPasswordStrengthModule} from '@angular-material-extensions/password-strength';
import {MarkdownModule} from 'ngx-markdown';

@NgModule({
  imports: [
    CommonModule,
    HomeRoutingModule,
    AppSharedModule,
    MarkdownModule.forChild(),
    MatPasswordStrengthModule
  ],
  declarations: [HomeComponent],
})
export class HomeModule {
}
