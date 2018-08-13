import {RouterModule} from '@angular/router';
import {NgModule} from '@angular/core';
import {ExamplesComponent} from './examples.component';

@NgModule({
  imports: [RouterModule.forChild([
    {path: '', component: ExamplesComponent}
  ])],
  exports: [RouterModule]
})
export class ExamplesRoutingModule {
}
