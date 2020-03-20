import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeProductComponent } from './home-product.component';

const routes: Routes = [
  {
    path: '',
    component: HomeProductComponent,
    data: {
      title: 'san-pham-moi'
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeProductRoutingModule {}