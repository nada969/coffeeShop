import { Component, Input, OnInit } from '@angular/core';
import { Product } from 'src/app/pages/product';
import { CartService } from 'src/app/service/cart.service';
import { __createBinding } from 'tslib';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {

  constructor(private _cart: CartService) { }

  
 

  @Input()
  myProduct: Product = {name: '',
    description: '',
    price: 0,
    image: '',
    category_name: ''
  };

  ngOnInit(): void {
  }

  addToCart(p: Product) {
    this._cart.addProduct(p);
    
  }  

}
