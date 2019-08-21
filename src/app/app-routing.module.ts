import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RemoteComponent } from './remote/remote.component';

const routes: Routes = [
  {
    path: 'remote',
    component: RemoteComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
