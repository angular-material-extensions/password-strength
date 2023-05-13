import { NgModule } from '@angular/core';
import { ServerModule } from '@angular/platform-server';
import { FlexLayoutServerModule } from '@ngbracket/ngx-layout/server';
import { AppComponent } from './app.component';
import { AppModule } from './app.module';

@NgModule({
  imports: [
    AppModule,
    ServerModule,
    FlexLayoutServerModule
  ],
  bootstrap: [AppComponent],
})
export class AppServerModule {}
