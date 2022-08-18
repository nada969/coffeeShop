import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { datacontantI } from 'src/app/components/product-list/pro-list';
import { LoginService } from 'src/app/service/login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.scss']
})
export class AddComponent implements OnInit {

  constructor(private _http: HttpClient, private _login:LoginService, private _router:Router ) {
    this.Finaltoken = 'Bearer '+ this._login.getToken();
   }

  newProduct: datacontantI = {
    name: '',
    description: '',
    price: 0,
    image: '',
    category_name: ''
  }

  Finaltoken: string = '';

  ngOnInit(): void {
  }

  addProduct () {
    let url = "https://shopping-app-bm.herokuapp.com/products/";
    
    this._http.post(url, this.newProduct,{headers :{'Authorization': this.Finaltoken}} ).subscribe(
      res => {
        console.log(res);
        this._router.navigate(['home']);
        alert("seccess");
      }, 
      
      error => {
        
        console.log(error);
        this._router.navigate(['home']);
      });
  }

}
