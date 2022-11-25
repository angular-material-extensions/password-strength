import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ExamplesComponent} from './examples.component';
import {ExamplesRoutingModule} from './examples-routing.module';
import {MarkdownModule} from 'ngx-markdown';
import {InfoCompExampleComponent} from './info-comp-example/info-comp-example.component';
import {TranslateLoader, TranslateModule} from '@ngx-translate/core';
import {MatLegacyRadioModule as MatRadioModule} from '@angular/material/legacy-radio';
import {HttpClient} from '@angular/common/http';
import {createTranslateLoader} from '../app.module';
import {MatLegacyCardModule as MatCardModule} from '@angular/material/legacy-card';
import {MatLegacySlideToggleModule as MatSlideToggleModule} from '@angular/material/legacy-slide-toggle';
import {MatLegacyInputModule as MatInputModule} from '@angular/material/legacy-input';
import {MatPasswordStrengthModule} from '@angular-material-extensions/password-strength';
import {FormsModule} from '@angular/forms';

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
    FormsModule,
    MatPasswordStrengthModule,
    MatCardModule,
    MatSlideToggleModule,
    MatInputModule,
    MatRadioModule
  ],
  declarations: [ExamplesComponent, InfoCompExampleComponent]
})
export class ExamplesModule {
}
