import { Component, Input, OnInit } from '@angular/core';
import { menuData } from './nav';
import { LoginService } from 'src/app/service/login.service';
import { NavigationStart, Router } from '@angular/router';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {

  @Input()
  menuData:Array<menuData>=[];

  showHide(x:HTMLDivElement) {
    console.log(x.className);
    if (x.className === "topnav menu") {
      
      x.className = "topnav responsive";
    } else {
      x.className = "topnav menu";
    }
  }


  constructor(private _login: LoginService,  private _router: Router) { }
  value:any = '0';
  ngOnInit(): void {
  }

  signOut(){
    this._login.logOut();
    this._router.navigate(['login']);
  }

}
