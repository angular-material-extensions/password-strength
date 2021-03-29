import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {InitExampleComponent} from './init-example/init-example.component';


const routes: Routes = [
  {path: '', component: InitExampleComponent},
  {
    path: 'getting-started',
    loadChildren: () => import('src/app/getting-started/getting-started.module').then(m => m.GettingStartedModule)
  },
  {
    path: 'examples',
    loadChildren: () => import('src/app/examples/examples.module').then(m => m.ExamplesModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    initialNavigation: 'enabled',
    relativeLinkResolution: 'legacy'
})],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
