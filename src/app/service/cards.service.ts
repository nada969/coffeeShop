import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { datacontantI } from '../components/product-list/pro-list';

@Injectable({
  providedIn: 'root'
})
export class CardsService {
token = localStorage.getItem("token");

  constructor( private http:HttpClient){}
  getData(category = 'hot coffee') {

    let url =`https://shopping-app-bm.herokuapp.com/products?category=${category}`;
    return this.http.get<datacontantI[]>(url, {headers: {'Authorization' : 'Bearer ' + this.token}});
    // , {headers:{"token" : this.token}} // 
  }

}
