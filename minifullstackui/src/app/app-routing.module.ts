import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddProductComponent } from './components/add-product/add-product.component';
import { ListProductsComponent } from './components/list-products/list-products.component';
import { AddCategoryComponent } from './components/add-category/add-category.component';
import { ListCategoryComponent } from './components/list-category/list-category.component';
import { HomePageComponent } from './components/home-page/home-page.component';

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
    path:'add-category',
    component:AddCategoryComponent
  },
  {
    path:'update-category/:id',
    component:AddCategoryComponent},
  {
    path:'list-categories',
    component:ListCategoryComponent
  },
  {
    path:'',
    component:HomePageComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
