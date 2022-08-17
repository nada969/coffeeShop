import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/service/login.service';
import { User } from '../user';



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  providers: []
})
export class LoginComponent implements OnInit {


  NewUser: User = {
    name: '',
    email : '',
    password : ''
  };
  
    //email :string = '';
    //password:string =  '';
  
  

  constructor(private _login: LoginService, private _router: Router, private _http: HttpClient) { }

  ngOnInit(): void {
  }

  HandleLogin() {
    let url = "https://shopping-app-bm.herokuapp.com/login/";
  
      this._http.post<any>(url, this.NewUser).subscribe(
        res => {
          
          console.log(res);
          this._login.CheckLogin(this.NewUser.email, this.NewUser.password, res.name, res.token);
          this._router.navigate(['home']);
        }, 
        
        error => {
          console.log(error);
        });
    
  }

}
