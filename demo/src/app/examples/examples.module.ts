import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ExamplesComponent} from './examples.component';
import {ExamplesRoutingModule} from './examples-routing.module';
import {AppSharedModule} from '../shared';
import {MarkdownModule} from 'ngx-markdown';

@NgModule({
  imports: [
    CommonModule,
    MarkdownModule.forChild(),
    ExamplesRoutingModule,
    AppSharedModule
  ],
  declarations: [ExamplesComponent]
})
export class ExamplesModule {
}
