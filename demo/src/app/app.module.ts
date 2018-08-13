import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {FormsModule} from '@angular/forms';

import {AppRoutingModule} from './app-routing.module';
import {AppSharedModule} from './shared/shared.module';
import {HomeModule} from './home/home.module';
import {AppComponent} from './app.component';
import {environment} from '../environments/environment';
import {ServiceWorkerModule} from '@angular/service-worker';
import {HttpClient, HttpClientModule} from '@angular/common/http';
import {MatInputModule} from '@angular/material';
import {MarkdownModule} from 'ngx-markdown';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    // Add .withServerTransition() to support Universal rendering.
    // The application ID can be any identifier which is unique on
    // the page.
    BrowserModule.withServerTransition({appId: '@angular-material-extensions/password-strength-demo-id'}),
    ServiceWorkerModule.register('/ngsw-worker.js', {enabled: environment.production}),
    MarkdownModule.forRoot({loader: HttpClient}),
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule,
    AppSharedModule,
    MatInputModule,
    HomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
