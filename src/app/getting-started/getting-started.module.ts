import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {GettingStartedComponent} from './getting-started.component';
import {GettingStartedRoutingModule} from './getting-started-routing.module';
import {ClipboardModule} from 'ngx-clipboard';
import {MatIconModule} from '@angular/material/icon';
import {MatPagesModule} from '@angular-material-extensions/pages';
import {HIGHLIGHT_OPTIONS, HighlightModule} from 'ngx-highlightjs';
import {MatPasswordStrengthModule} from '@angular-material-extensions/password-strength';
import {FormsModule} from '@angular/forms';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import {MatCardModule} from '@angular/material/card';
import {MatListModule} from '@angular/material/list';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import {MatSnackBarModule} from '@angular/material/snack-bar';


/**
 * Import specific languages to avoid importing everything
 * The following will lazy load highlight.js core script (~9.6KB) + the selected languages bundle (each lang. ~1kb)
 */
export function getHighlightLanguages() {
  return {
    typescript: () => import('highlight.js/lib/languages/typescript'),
    css: () => import('highlight.js/lib/languages/css'),
    xml: () => import('highlight.js/lib/languages/xml')
  };
}

@NgModule({
  imports: [
    CommonModule,
    GettingStartedRoutingModule,
    HighlightModule,
    MatPasswordStrengthModule,
    MatPagesModule,
    ClipboardModule,
    MatCardModule,
    MatIconModule,
    MatListModule,
    MatSlideToggleModule,
    MatInputModule,
    MatSnackBarModule,
    MatButtonModule,
    FormsModule
  ],
  declarations: [GettingStartedComponent],
  providers: [
    {
      provide: HIGHLIGHT_OPTIONS,
      useValue: {
        languages: getHighlightLanguages()
      }
    }
  ],
})
export class GettingStartedModule {
}
