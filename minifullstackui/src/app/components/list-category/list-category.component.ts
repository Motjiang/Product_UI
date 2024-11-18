import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { CaegoryService } from 'src/app/categoryservices/caegory.service';
import { Category } from 'src/app/models/category';

@Component({
  selector: 'app-list-category',
  templateUrl: './list-category.component.html',
  styleUrls: ['./list-category.component.css']
})
export class ListCategoryComponent implements OnInit {

  categories!:Category[];

  getCategories(){
    this.categoryService.getAll().subscribe({
      next:(res)=>{
        this.categories=res;
      },
      error:(err)=>{
        console.log(err);
      }
    })
  }
 
  edit(id:number):void{
    this.router.navigate([`/update-category/${id}`]);
  }

  delete(id:number,index:number):void{
    if(window.confirm("Are your sure to delete??")){
    this.categoryService.delete(id).subscribe({
      next:(res)=>{
        if(res.statusCode==1){
          this.categories.splice(index,1);
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
  constructor(private categoryService:CaegoryService,private router:Router) { }

  ngOnInit(): void {
    this.getCategories();
  }
  }

 

