import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddProductComponent } from './components/add-product/add-product.component';
import { ListProductsComponent } from './components/list-products/list-products.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AddCategoryComponent } from './components/add-category/add-category.component';
import { ListCategoryComponent } from './components/list-category/list-category.component';
@NgModule({
  declarations: [
    AppComponent,
    AddProductComponent,
    ListProductsComponent,
    AddCategoryComponent,
    ListCategoryComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule, 
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
