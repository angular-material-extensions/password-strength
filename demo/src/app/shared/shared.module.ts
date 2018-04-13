import {RouterModule} from '@angular/router';
import {NgModule} from '@angular/core';
import {NgbCollapseModule} from '@ng-bootstrap/ng-bootstrap';

import {HeaderComponent} from './header/header.component';
import {FooterComponent} from './footer/footer.component';
import {ContentWrapperComponent} from './content-wrapper/content-wrapper.component';
import {MatCardModule, MatInputModule, MatProgressBarModule, MatSlideToggleModule} from '@angular/material';
import {FlexLayoutModule} from '@angular/flex-layout';
import {NgxMaterialPasswordStrengthModule} from 'ngx-material-password-strength';

@NgModule({
  imports: [
    RouterModule,
    NgbCollapseModule.forRoot(),
    NgxMaterialPasswordStrengthModule.forRoot(),
    FlexLayoutModule,
    MatCardModule,
    MatInputModule,
    MatProgressBarModule,
    MatSlideToggleModule
  ],
  exports: [
    HeaderComponent,
    FooterComponent,
    ContentWrapperComponent,
    NgxMaterialPasswordStrengthModule,
    FlexLayoutModule,
    MatCardModule,
    MatInputModule,
    MatProgressBarModule,
    MatSlideToggleModule
  ],
  declarations: [HeaderComponent, FooterComponent, ContentWrapperComponent],
  providers: [],
})
export class AppSharedModule {
}
