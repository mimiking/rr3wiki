import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TopComponent } from './pages/top/top.component';

const routes: Routes = [
  { path: '', component: TopComponent, data: { title: 'TOP' } },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: []
})
export class AppRoutingModule { }
