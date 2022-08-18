import { HttpClient } from '@angular/common/http';

import { Component, OnInit } from '@angular/core';
import { datacontantI } from './pro-list';
import { cold } from './cold';
import { CardsService } from '../../service/cards.service';
import { CartService } from 'src/app/service/cart.service';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {

  dataI:datacontantI[]=[]; 
  dataIcold:cold[]=[];  

  constructor(private cardservice:CardsService, private _cart: CartService, private router:Router){
    this.cardservice.getDataHot().subscribe((data) => {this.dataI=  data});
    this.cardservice.getDataCold().subscribe((data) => {this.dataIcold=  data});
 
  
  }

  ngOnInit(): void {
    
  }

  addToCart(p: datacontantI){

    this._cart.addProduct(p);
  }
  

  readMore(id: number){
    
    this.router.navigate(['/products', id]);
  }
  
  
  delete(p:number){ 
    alert("Reload your Page");
    this.cardservice.deleteData(p).subscribe(deleteData=>{
     
      this.dataI = deleteData;
      this.dataIcold = deleteData;
      
    })
  }

}
