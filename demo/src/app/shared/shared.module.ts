import {RouterModule} from '@angular/router';
import {NgModule} from '@angular/core';
import {NgbCollapseModule} from '@ng-bootstrap/ng-bootstrap';

import {HeaderComponent} from './header/header.component';
import {FooterComponent} from './footer/footer.component';
import {ContentWrapperComponent} from './content-wrapper/content-wrapper.component';
import {
  MatButtonModule,
  MatCardModule,
  MatDividerModule,
  MatIconModule,
  MatInputModule,
  MatListModule,
  MatProgressBarModule,
  MatSlideToggleModule,
  MatSnackBarModule,
  MatTabsModule,
  MatToolbarModule,
  MatTooltipModule
} from '@angular/material';
import {FlexLayoutModule} from '@angular/flex-layout';
import {MatPasswordStrengthModule} from '@angular-material-extensions/password-strength';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {DisqusModule} from 'ngx-disqus';
import {HighlightModule} from 'ngx-highlightjs';
import {NgxMaterialPagesModule} from 'ngx-material-pages';
import {TranslateModule} from '@ngx-translate/core';

import typescript from 'highlight.js/lib/languages/typescript';
import scss from 'highlight.js/lib/languages/scss';
import xml from 'highlight.js/lib/languages/xml';

export function hljsLanguages() {
  return [
    {name: 'typescript', func: typescript},
    {name: 'scss', func: scss},
    {name: 'xml', func: xml}
  ];
}

@NgModule({
  imports: [
    RouterModule,
    NgbCollapseModule.forRoot(),
    MatPasswordStrengthModule.forRoot(),
    NgxMaterialPagesModule.forRoot(),
    DisqusModule.forRoot('mat-password-strength'),
    HighlightModule.forRoot({
      languages: hljsLanguages
    }),
    FormsModule,
    ReactiveFormsModule,
    FlexLayoutModule,
    MatCardModule,
    MatInputModule,
    MatIconModule,
    MatDividerModule,
    MatProgressBarModule,
    MatSlideToggleModule,
    MatSnackBarModule,
    MatTooltipModule,
    MatButtonModule,
    MatToolbarModule,
    MatTabsModule,
    MatListModule
  ],
  exports: [
    HeaderComponent,
    FooterComponent,
    ContentWrapperComponent,
    MatPasswordStrengthModule,
    NgxMaterialPagesModule,
    DisqusModule,
    HighlightModule,
    FormsModule,
    ReactiveFormsModule,
    FlexLayoutModule,
    MatCardModule,
    MatInputModule,
    MatIconModule,
    MatDividerModule,
    MatProgressBarModule,
    MatSlideToggleModule,
    MatSnackBarModule,
    MatTooltipModule,
    MatButtonModule,
    MatToolbarModule,
    MatTabsModule,
    MatListModule,
    TranslateModule
  ],
  declarations: [HeaderComponent, FooterComponent, ContentWrapperComponent],
  providers: [],
})
export class AppSharedModule {
}
