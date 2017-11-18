import { Component, ViewChild } from '@angular/core';
import { Http } from '@angular/http';
import { UserService } from '../../_core/user/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  loading = false;
  logged = false;
  model: any = {};

  constructor(public http: Http, public user: UserService) {}

  loginEvent() {
    this.loading = true;
    this.user.login(this.model).subscribe(
      data => {
        //this.user.setUserLoggedIn(data.json().login_result);
        console.log(data);
        this.loading = false;
      },
      err => console.log(err['_body']));
  }
}
