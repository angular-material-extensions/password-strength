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

@NgModule({
  imports: [
    RouterModule,
    NgbCollapseModule.forRoot(),
    MatPasswordStrengthModule.forRoot(),
    NgxMaterialPagesModule.forRoot(),
    DisqusModule.forRoot('mat-password-strength'),
    HighlightModule.forRoot(),
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
    MatListModule
  ],
  declarations: [HeaderComponent, FooterComponent, ContentWrapperComponent],
  providers: [],
})
export class AppSharedModule {
}
