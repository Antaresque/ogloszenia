import { Component, ViewChild, OnInit } from '@angular/core';
import { UserService } from '../../_core/user/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  isLoggedIn: boolean;
  wrongPassword = false;
  loading = false;
  model: any = {};

  constructor(public user: UserService, private router: Router) {}

  ngOnInit(){
  }

  loginEvent() {
    this.loading = true;
    this.user.login(this.model).subscribe(
      data => {
        console.log(data);
        this.isLoggedIn = JSON.parse(data['_body'])['login_result'];
       // czy uzytkownik podal dobre dane (bool)
        this.model = {};
        this.loading = false;

        if(this.isLoggedIn) {
          this.user.setJWT(JSON.parse(data['_body'])['jwt']);
          this.router.navigate(['/']);
        } else this.wrongPassword = true;
      },
      err => {
        this.model = {};
        console.log(err['_body']);
        this.loading = false;
      });
  }
}
