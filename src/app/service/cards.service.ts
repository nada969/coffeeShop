import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { datacontantI } from '../components/product-list/pro-list';
import { cold } from '../components/product-list/cold';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class CardsService {
 
 token = localStorage.getItem("token");


  constructor( private http:HttpClient){
     this.token = localStorage.getItem("token");
  }
  getDataHot() {

    var url =`https://shopping-app-bm.herokuapp.com/products?category=hot coffee`;
    return this.http.get<datacontantI[]>(url, {headers: {'Authorization' : 'Bearer ' + this.token}});

  }

  getDataCold() {

    var url =`https://shopping-app-bm.herokuapp.com/products?category=iced coffee`;
    return this.http.get<cold[]>(url, {headers: {'Authorization' : 'Bearer ' + this.token}});
  
  }

  deleteData(x:number):Observable<any>{
    return this.http.delete("https://shopping-app-bm.herokuapp.com/products?id="+x, {headers: {'Authorization' : 'Bearer ' + this.token}});
  }
}
