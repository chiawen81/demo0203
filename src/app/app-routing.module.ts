import { Hw1Component } from './hw1/hw1.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Hw2Component } from './hw2/hw2.component';

const routes: Routes = [
  {
    path: "home",
    component: Hw1Component,
  },
  {
    path: "content",
    component: Hw2Component,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
