import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  

  private isLogin: boolean = false;
  private username: any = '';
  private email: any = '';
  private token: any = '';

  constructor() {
    if(localStorage.getItem('isLogin')=='true'){
        this.isLogin = true;
        this.username = localStorage.getItem('username');
        this.email = localStorage.getItem('email');
        this.token = localStorage.getItem('token');
    }
   }

  CheckUserAuth ():boolean {
    return this.isLogin;
  }

  CheckLogin(email: string, password: string, username: string, token: string) {
    this.isLogin = true;
    this.username = username;
    this.email =email;
    this.token = token;
    localStorage.setItem('isLogin', 'true');
    localStorage.setItem('username', this.username);
    localStorage.setItem('email', this.email);
    localStorage.setItem('token', this.token);
  }

  logOut() {
    this.isLogin = false;
    this.username = '';
    this.email = '';
    this.token = '';
    localStorage.setItem('isLogin', 'false');
    localStorage.setItem('username', '');
    localStorage.setItem('email', '');
    localStorage.setItem('token', '');
  }

  getUsername() {
    return this.username;
  }

  getemail() {
    return this.email;
  }

  getToken() {
    return this.token;
  }
}
