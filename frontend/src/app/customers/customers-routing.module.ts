import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { GuestComponent } from './guest/guest.component';

const routes: Routes = [
  { 
    path: '', 
    component: GuestComponent,
    children: [
      
    ] 
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CustomersRoutingModule { }
