import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ExamplesComponent} from './examples.component';
import {ExamplesRoutingModule} from './examples-routing.module';
import {AppSharedModule} from '../shared';
import {MarkdownModule} from 'ngx-markdown';
import {InfoCompExampleComponent} from './info-comp-example/info-comp-example.component';
import {TranslateLoader, TranslateModule} from '@ngx-translate/core';
import {MatRadioModule} from '@angular/material';
import {HttpClient} from '@angular/common/http';
import {createTranslateLoader} from '../app.module';

@NgModule({
  imports: [
    CommonModule,
    MarkdownModule.forChild(),
    TranslateModule.forChild({
      loader: {
        provide: TranslateLoader,
        useFactory: (createTranslateLoader),
        deps: [HttpClient]
      }
    }),
    ExamplesRoutingModule,
    AppSharedModule,
    MatRadioModule
  ],
  declarations: [ExamplesComponent, InfoCompExampleComponent]
})
export class ExamplesModule {
}
