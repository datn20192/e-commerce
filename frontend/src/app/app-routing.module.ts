import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NotFoundComponent } from './components/not-found/not-found.component';

const routes: Routes = [      

  {
    path: '',
    loadChildren: () => import('./home/home.module').then(m => m.HomeModule)
  },
  
  { 
    path: 'checkout', 
    loadChildren: () => import('./checkout/checkout.module').then(m => m.CheckoutModule) 
  },

  { path: '**', component: NotFoundComponent }
  
           
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }