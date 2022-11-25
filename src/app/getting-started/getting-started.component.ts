import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import {Title} from '@angular/platform-browser';
import {MatLegacySlideToggleChange as MatSlideToggleChange} from '@angular/material/legacy-slide-toggle';
import {MatLegacySnackBar as MatSnackBar} from '@angular/material/legacy-snack-bar';


@Component({
  selector: 'app-getting-started',
  templateUrl: './getting-started.component.html',
  styleUrls: ['./getting-started.component.scss'],

  encapsulation: ViewEncapsulation.None,
})
export class GettingStartedComponent implements OnInit {

  links: { name: string, description?: string, url: string, icon?: string }[] = [
    {
      name: 'ngx-auth-firebaseui',
      icon: 'account_circle',
      description: 'Angular Material UI component for firebase authentication',
      url: 'https://github.com/AnthonyNahas/ngx-auth-firebaseui'
    },
    {
      name: 'ngx-material-pages',
      icon: 'list',
      description: 'Open source library for angular apps to illustrate custom material pages content with' +
      ' steps (ideal for tutorials and explanations purposes)',
      url: 'https://github.com/AnthonyNahas/ngx-material-pages'
    },
    {
      name: 'ngx-material-contact',
      icon: 'create',
      description: 'Angular Library to manage contacts and users with a material design ',
      url: 'https://github.com/AnthonyNahas/ngx-material-contacts'
    },
    {
      name: 'ngx-combination-generator',
      icon: 'fingerprint',
      description: 'Angular Library built on the top of the combination +' +
      'generator package of @udjamaflip in order to generate all possible (unique) permutations of a' +
      ' provided list of characters.',
      url: 'https://github.com/AnthonyNahas/ngx-auth-firebaseui'
    },
    {
      name: 'ngx-material-faq',
      icon: 'help',
      description: 'Angular Library built with material design in order to provide a reusable faq (frequently asked questions) ' +
      'component for every project. Ask, Answer and List ',
      url: 'https://github.com/AnthonyNahas/ngx-material-faq'
    }

  ];

  ngVersion = `    _                      _                 ____ _     ___
                 / \\   _ __   __ _ _   _| | __ _ _ __     / ___| |   |_ _|
                / △ \\ | '_ \\ / _\` | | | | |/ _\` | '__|   | |   | |    | |
               / ___ \\| | | | (_| | |_| | | (_| | |      | |___| |___ | |
              /_/   \\_\\_| |_|\\__, |\\__,_|_|\\__,_|_|       \\____|_____|___|
                             |___/

              Angular CLI: 1.7.3
              Node: 8.11.1
              OS: darwin x64
              Angular:`;

  importBrowserAnimationsModule = `import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

                                    @NgModule({
                                      ...
                                      imports: [BrowserAnimationsModule],
                                      ...
                                    })
                                    export class YourAppModule { }`;

  importNoopAnimationsModule = `import {NoopAnimationsModule} from '@angular/platform-browser/animations';

                                    @NgModule({
                                      ...
                                      imports: [NoopAnimationsModule],
                                      ...
                                    })
                                    export class YourAppModule { }`;

  importMaterialThemeSCSS = `@import "~@angular/material/prebuilt-themes/indigo-pink.css";`;

  customMaterialTheme =
    `@import '../node_modules/@angular/material/theming';
     // Plus imports for other components in your app
     // Include the common styles for Angular Material. We include this here so that you only
     // have to load a single css file for Angular Material in your app.
     // Be sure that you only ever include this mixin once!
     @include mat-core()
     // Define the palettes for your theme using the Material Design palettes available in palette.scss
     // (imported above). For each palette, you can optionally specify a default, lighter, and darker
     // hue.
     $candy-app-primary: mat-palette($mat-indigo);
     $candy-app-accent:  mat-palette($mat-pink, A200, A100, A400)
     // The warn palette is optional (defaults to red).
     $candy-app-warn:    mat-palette($mat-red)
     // Create the theme object (a Sass map containing all of the palettes).
     $candy-app-theme: mat-light-theme($candy-app-primary, $candy-app-accent, $candy-app-warn)
     // Include theme styles for core and each component used in your app.
     // Alternatively, you can import and @include the theme mixins for each component
     // that you are using.
     @include angular-material-theme($candy-app-theme);
     `;

  stylesBeforeImportMDI = `"styles": [
        "styles.css"
      ],`;

  stylesAfterImportMDI = `"styles": [
        "styles.css",
        "../node_modules/material-design-icons/iconfont/material-icons.css"
      ],`;

  materialIconsLink = `<link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">`;

  // 6

  systemJSModuleImport = `map: {
  '@angular-material-extensions/password-strength': 'node_modules/@angular-material-extensions/password-strength/bundles/@angular-material-extensions/password-strength.umd.js',
  }`;

  importMatPasswordStrengthModule = `import { MatPasswordStrengthModule } from '@angular-material-extensions/password-strength';`;

  importMatPasswordStrengthModuleInAppModule = `import { MatPasswordStrengthModule } from '@angular-material-extensions/password-strength';
                                              import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

                                              @NgModule({
                                                declarations: [AppComponent, ...],
                                                imports: [MatPasswordStrengthModule.forRoot(),
                                                BrowserAnimationsModule,
                                                 ...],
                                                bootstrap: [AppComponent]
                                              })
                                              export class AppModule {
                                              }`;

  importMatPasswordStrengthModuleInOtherModule = `import { MatPasswordStrengthModule } from '@angular-material-extensions/password-strength';

                                                @NgModule({
                                                  declarations: [OtherComponent, ...],
                                                  imports: [MatPasswordStrengthModule, ...],
                                                })
                                                export class OtherModule {
                                                }`;

  componentExample = `<mat-password-strength  [password]="password.value">
                      </mat-password-strength>`;

  example = `<mat-form-field floatPlaceholder="auto" style="width: 100%">
                <input matInput #password
                       [type]="inputType"
                       required
                       placeholder="Password">
                <mat-hint align="end" aria-live="polite">
                  {{password.value.length}} / 25
                </mat-hint>
              </mat-form-field>
              <mat-password-strength #passwordComponent
                                              [password]="password.value">
              </mat-password-strength>`;

  password: string;
  inputType = 'password';
  showDetails: boolean;

  constructor(private titleService: Title,
              public snackBar: MatSnackBar) {
  }

  ngOnInit() {
    this.titleService.setTitle('Getting Started | mat-password-strength');
  }

  onSlideToggleChange(event: MatSlideToggleChange) {
    event.checked ? this.inputType = 'text' : this.inputType = 'password';
  }

  showCopyMessage(content: string) {
    this.snackBar.open(`${content} copied`, 'OK', {
      duration: 3000
    });
  }

}
