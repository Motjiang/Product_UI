import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Product } from 'src/app/models/product';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-list-products',
  templateUrl: './list-products.component.html',
  styleUrls: ['./list-products.component.css']
})
export class ListProductsComponent implements OnInit {

  
  products!:Product[];
  constructor(private productService:ProductService,private router:Router) { }

  private getProducts(term=""){
    this.productService.getAll(term).subscribe({
      next:(res)=>{
        this.products=res;
      },
      error:(err)=>{
        console.log(err);
      }
    })
  }
 
  search(term:string){
    this.getProducts(term);
  }

  edit(id:number):void{
    this.router.navigate([`/update-product/${id}`]);
  }

  delete(id:number,index:number):void{
    if(window.confirm("Are your sure to delete??")){
    this.productService.delete(id).subscribe({
      next:(res)=>{
        if(res.statusCode==1){
          this.products.splice(index,1);
        }
        else{
          console.log(res.message);
        }
      },
      error:(err)=>{
        console.log(err);
      }
    })
  }
  }
 

  ngOnInit(): void {
    this.getProducts();
  }

}
