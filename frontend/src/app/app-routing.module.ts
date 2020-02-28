import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ListProductComponent} from './components/list-product/list-product.component';
import {NotFoundComponent } from './components/not-found/not-found.component';
import { ProductDetailComponent} from "./components/product-detail/product-detail.component";
// : if request.auth != null
const routes: Routes = [
{path: "products", component:ListProductComponent},
{path: "", redirectTo: '/products', pathMatch: "full"},
{path: "products/:id", component: ProductDetailComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
