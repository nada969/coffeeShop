import { HttpClient ,HttpHeaders} from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/service/login.service';
import { User } from '../user';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  NewUser: User = {
    name : '',
    email : '',
    password : ''
  };
  

  constructor(private _login: LoginService, private _router: Router, private _http: HttpClient) { }

  ngOnInit(): void {
  }

  HandleRegister() {

    let url = "https://shopping-app-bm.herokuapp.com/register/";
    
    this._http.post(url, this.NewUser,{observe: 'response', responseType: 'text'}).subscribe(
      res => {
        console.log(res);
        this._router.navigate(['login']);
      }, 
      
      error => {
        alert("Email is already taken");
        console.log(error);
      });

  }

}
