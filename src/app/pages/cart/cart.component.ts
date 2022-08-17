import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/service/cart.service';
import { Product } from '../product';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {

  constructor(private _cart: CartService) { }

  cart: Product[] = [];
  totalPrice: number = 0;

  ngOnInit(): void {
    this.cart = this._cart.getCartProducts();
    this.totalPrice = this._cart.getTotalPrice();
  }

  placeOrder() {
    this._cart.clearCart();
    this.cart = [];
    this.totalPrice = 0;
    alert("success");
  }

}
