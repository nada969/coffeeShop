import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { datacontantI } from '../components/product-list/pro-list';
import { cold } from '../components/product-list/cold';

@Injectable({
  providedIn: 'root'
})
export class CardsService {
 
 token = localStorage.getItem("token");

  constructor( private http:HttpClient){
     this.token = localStorage.getItem("token");
  }
  getDataHot() {

    let url =`https://shopping-app-bm.herokuapp.com/products?category=hot coffee`;
    return this.http.get<datacontantI[]>(url, {headers: {'Authorization' : 'Bearer ' + this.token}});
    // , {headers:{"token" : this.token}} // 
  }

  getDataCold() {

    let url =`https://shopping-app-bm.herokuapp.com/products?category=iced coffee`;
    return this.http.get<cold[]>(url, {headers: {'Authorization' : 'Bearer ' + this.token}});
    // , {headers:{"token" : this.token}} // 
  }

}
