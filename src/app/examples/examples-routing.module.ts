import {RouterModule} from '@angular/router';
import {NgModule} from '@angular/core';
import {ExamplesComponent} from './examples.component';
import {InfoCompExampleComponent} from './info-comp-example/info-comp-example.component';

@NgModule({
  imports: [RouterModule.forChild([
    {path: '', component: ExamplesComponent},
    {path: 'mat-password-strength-info', component: InfoCompExampleComponent},
  ])],
  exports: [RouterModule]
})
export class ExamplesRoutingModule {
}
