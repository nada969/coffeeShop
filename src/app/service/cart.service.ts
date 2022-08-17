import { Injectable } from '@angular/core';
import { datacontantI } from '../components/product-list/pro-list';
import { Product } from '../pages/product';

@Injectable({
  providedIn: 'root'
})


export class CartService {
  private cartProducts : datacontantI[] = []; 
  private totalPrice: number = 0;
  constructor() { }


  addProduct(p: datacontantI) {
    this.cartProducts.push(p);
    this.totalPrice += p.price;
  }

  getCartProducts(){
    return this.cartProducts;
  }

  getTotalPrice() {
    return this.totalPrice;
  }

  clearCart(){
    this.cartProducts=[];
    this.totalPrice = 0;
  }
}
