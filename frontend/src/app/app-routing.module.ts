import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NotFoundComponent } from './components/not-found/not-found.component';
import { AuthGuard } from './guards/auth.guard';

const routes: Routes = [      

  {
    path: '',
    loadChildren: () => import('./modules/home/home.module').then(m => m.HomeModule)
  },
  
  { 
    path: 'thanh-toan', 
    loadChildren: () => import('./modules/checkout/checkout.module').then(m => m.CheckoutModule),
    canLoad: [AuthGuard] 
  },  

  {
    path: 'quan-ly',
    loadChildren: () => import('./modules/admin/admin.module').then(m => m.AdminModule)
  },

  { path: '**', component: NotFoundComponent }
  
           
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }