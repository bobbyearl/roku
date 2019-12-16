import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { RemoteComponent } from './remote/remote.component';

const routes: Routes = [
  {
    path: 'remote',
    component: RemoteComponent
  },
  {
    path: '**',
    component: HomeComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
