import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'getting-started',
    loadChildren: () => import('app/getting-started/getting-started.module').then(m => m.GettingStartedModule)
  },
  {
    path: 'examples',
    loadChildren: () => import('app/examples/examples.module').then(m => m.ExamplesModule)
  }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
