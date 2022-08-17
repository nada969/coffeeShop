import { Injectable } from '@angular/core';
import { Product } from '../pages/product';

@Injectable({
  providedIn: 'root'
})


export class CartService {
  private cartProducts : Product[] = []; 
  private totalPrice: number = 0;
  constructor() { }


  addProduct(p: Product) {
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
