import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {NotFoundComponent } from './components/not-found/not-found.component';
import { DefaultLayoutComponent } from './views/default-layout/default-layout.component';
import { HomeProductComponent } from './views/home-product/home-product.component';
import { ProductDetailComponent} from "./components/product-detail/product-detail.component";
import { SigninComponent } from './components/signin/signin.component';
// : if request.auth != null
const routes: Routes = [ 
  {
    path: '',
    redirectTo: 'san-pham-moi',
    pathMatch: 'full',
  }, 
  {
    path: '',
    component: DefaultLayoutComponent,
    data: {
      title: 'Trang chủ'
    },
    children: [
      {
        path: 'san-pham-moi',        
        loadChildren: () => import('./views/home-product/home-product.module').then(m => m.HomeProductModule)
      }
    ]
  },  
  {path: "", redirectTo: '/products', pathMatch: "full"},
  {path: ":id", component: ProductDetailComponent},
  {path: 'signin', component: SigninComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
