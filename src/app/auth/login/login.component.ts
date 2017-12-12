import { Location } from '@angular/common';
import { Component, ViewChild, OnInit } from '@angular/core';
import { UserService } from '../../_core/user/user.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  isLoggedIn: boolean;
  wrongPassword = false;
  redirect = true;
  loading = false;
  model: any = {};
  error: any = [];

  constructor(public user: UserService, private router: Router, private route: ActivatedRoute, private location: Location) {
    this.route.queryParams.subscribe(
      params => {
        this.redirect = params['redirect'] || true;
      })
  }

  ngOnInit(){
  }

  loginEvent() {
    this.loading = true;
    this.user.login(this.model).subscribe(
      res => {
        this.model = {};
        this.error = [];
        this.loading = false;

        this.user.setJWT(res['jwt']);
        this.redirect === true
          ? this.location.back()
          : this.router.navigate(['/']);
        },
      err => {
        this.model = {};
        this.error = err;
        this.loading = false;
      });
  }
}
