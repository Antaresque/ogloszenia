import { Component, ViewChild } from '@angular/core';
import { Location } from '@angular/common';
import { Http } from '@angular/http';
import { UserService } from '../../_core/user/user.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  wrongPassword = false;
  loading = false;
  model: any = {};

  constructor(public http: Http, public user: UserService, private location: Location) {}

  loginEvent() {
    this.loading = true;
    this.user.login(this.model).subscribe(
      data => {
        this.user.isLoggedIn = JSON.parse(data['_body'])['login_result'];
        console.log(this.user.isLoggedIn); // czy uzytkownik podal dobre dane (bool)

        this.model = {};
        this.loading = false;
        if(this.user.isLoggedIn) this.location.back();
        else this.wrongPassword = true;
      },
      err => {
        this.model = {};
        console.log(err['_body']);
        this.loading = false;
      });
  }
}
