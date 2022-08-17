import { Component } from '@angular/core';
import { NavigationStart, Router } from '@angular/router';
import { LoginService } from './service/login.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  title = 'project';
  isLogin: boolean = false; 

  constructor(private _loginService: LoginService, private _router: Router){
    this._router.events.subscribe(e => {

      if(e instanceof NavigationStart) {

        let url = e.url.toString();
        if(this._loginService.CheckUserAuth()) {
            this.isLogin = this._loginService.CheckUserAuth();

            if(url.includes('login') || url.includes('register')) {
              this._router.navigate(['home']);
            }
        }
        else {

          this.isLogin = this._loginService.CheckUserAuth();
          if(url.includes('login') == false && url.includes('register') == false) {
            this._router.navigate(['login']);
          }

        }
      }



    });

  }
}
