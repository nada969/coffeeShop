import { Injectable } from '@angular/core';
import { datacontantI } from '../components/product-list/pro-list';
import { Product } from '../pages/product';

@Injectable({
  providedIn: 'root'
})


export class CartService {
  private cartProducts : datacontantI[] = []; 
  private totalPrice: number = 0;
  constructor() { 
    this.cartProducts = JSON.parse(localStorage.getItem("cart")|| '{}');
  }


  addProduct(p: datacontantI) {
    this.cartProducts.push(p);
    this.totalPrice += p.price;
    localStorage.setItem("cart", JSON.stringify(this.cartProducts));
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
    localStorage.setItem("cart", JSON.stringify(this.cartProducts));
  }
}
