import { ListapelisComponent } from './listapelis/listapelis.component';
import { MoviedetailComponent } from './moviedetail/moviedetail.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: 'home', component: ListapelisComponent },
  { path: ':which/:id', component: MoviedetailComponent },
  { path: '**', redirectTo: 'home' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
