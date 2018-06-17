import {RouterModule} from '@angular/router';
import {NgModule} from '@angular/core';
import {NgbCollapseModule} from '@ng-bootstrap/ng-bootstrap';

import {HeaderComponent} from './header/header.component';
import {FooterComponent} from './footer/footer.component';
import {ContentWrapperComponent} from './content-wrapper/content-wrapper.component';
import {
  MatCardModule,
  MatDividerModule,
  MatIconModule,
  MatInputModule,
  MatProgressBarModule,
  MatSlideToggleModule,
  MatSnackBarModule,
  MatTooltipModule,
  MatButtonModule, MatToolbarModule, MatTableModule, MatTabsModule, MatListModule
} from '@angular/material';
import {FlexLayoutModule} from '@angular/flex-layout';
import {NgxMaterialPasswordStrengthModule} from 'mat-password-strength';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {DisqusModule} from 'ngx-disqus';
import {HighlightModule} from 'ngx-highlightjs';
import {NgxMaterialPagesModule} from 'ngx-material-pages';

@NgModule({
  imports: [
    RouterModule,
    NgbCollapseModule.forRoot(),
    NgxMaterialPasswordStrengthModule.forRoot(),
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
    NgxMaterialPasswordStrengthModule,
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
