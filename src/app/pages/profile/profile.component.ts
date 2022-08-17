import { Component, OnInit } from '@angular/core';
import { LoginService } from 'src/app/service/login.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

  username: string = '';
  email: string = '';

  constructor(private _login: LoginService) {
  
   }

  ngOnInit(): void {

    this.username = this._login.getUsername();
    this.email = this._login.getemail();

  }

}
