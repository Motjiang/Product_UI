import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { CaegoryService } from 'src/app/categoryservices/caegory.service';
import { Category } from 'src/app/models/category';
import { Status } from 'src/app/models/status';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit {

  frm!:FormGroup;
  status!:Status;
  categories!:Category[]; //for binding a category dropdown
  get f(){
    return this.frm.controls; //will be used in validation
  }

  onPost(){
    this.status={statusCode:0,message:'wait..'};
    this.productService.addUpdate(this.frm.value).subscribe({
      next:(res)=>{
        this.status=res;
        if(this.status.statusCode==1){
          this.frm.reset();
        }
      },
      error:(err)=>{
        console.log(err); 
      }
    })
  }

  private getCategories(){
    this.categoryService.getAll().subscribe({
      next:(res)=>{
        this.categories=res;
        console.log(this.categories);
      },
      error:(err)=>{
        console.log(err);
      }
    })
  }
  constructor(private fb:FormBuilder,private categoryService:CaegoryService,private productService:ProductService,route:ActivatedRoute ) { 
  
    const id= route.snapshot.params['id'];
    if(id){
      productService.getById(id).subscribe(
        {
          next:(res)=>{
            this.frm.patchValue(res);      
          },
          error:(err)=>{
            console.log(err); 
          }
        }
      );
  }
}

  ngOnInit(): void {
    this.frm= this.fb.group({
      'id':[0],
      'name':['',Validators.required],
      'categoryId':[0,Validators.required],
      'price':[0,Validators.required]
    })
    this.getCategories();
  }
}
