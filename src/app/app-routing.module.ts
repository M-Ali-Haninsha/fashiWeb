import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './userSide/home-page/home-page.component';
import { NgrxPComponent } from './userSide/ngrx-p/ngrx-p.component';

const routes: Routes = [
  {path:'', component:HomePageComponent},
  {path:'ngrx', component:NgrxPComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
