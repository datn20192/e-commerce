import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NotFoundComponent } from './components/not-found/not-found.component';

import { AuthGuard } from './guards/auth.guard';
import { AdminModuleGuard } from './guards/admin/admin-module.guard';
import { ShipperModuleGuard } from './guards/shipper/shipper-module.guard';

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
    loadChildren: () => import('./modules/admin/admin.module').then(m => m.AdminModule),
    canLoad: [AdminModuleGuard]
  },

  {
    path: 'giao-hang',
    loadChildren: () => import('./modules/shipper/shipper.module').then(m => m.ShipperModule),
    canLoad: [ShipperModuleGuard]
  },

  { path: '**', component: NotFoundComponent }
  
           
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }