import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddProductComponent } from './components/add-product/add-product.component';
import { ListProductsComponent } from './components/list-products/list-products.component';

const routes: Routes = [
  {
    path:'add-product',
    component:AddProductComponent
  },
  {
    path:'update-product/:id',
    component:AddProductComponent},
  {
    path:'list-products',
    component:ListProductsComponent
  },
  {
    path:'',
    redirectTo:'/list-products',
    pathMatch:'full'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
