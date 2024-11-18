import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Category } from '../models/category';
import { Status } from '../models/status';

@Injectable({
  providedIn: 'root'
})
export class CaegoryService {

  private baseUrl=environment.baseUrl+'/categories';
  constructor(private http:HttpClient) {

   }

   addUpdate(category:Category){
    return this.http.post<Status>(this.baseUrl,category);
   }

   getById(id:number){
    return this.http.get<Category>(this.baseUrl+'/'+id);
   }

   getAll(){
    return this.http.get<Category[]>(this.baseUrl);
   }

   delete(id:number){
    return this.http.delete<Status>(this.baseUrl+'/'+id);
   }
}
