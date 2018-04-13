import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {HomeRoutingModule} from './home-routing.module';
import {HomeComponent} from './home.component';
import {AppSharedModule} from '../shared';

@NgModule({
  imports: [
    CommonModule,
    HomeRoutingModule,
    AppSharedModule
  ],
  declarations: [HomeComponent],
})
export class HomeModule {
}
