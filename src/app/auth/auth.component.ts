import { Component, OnInit, ViewChild } from '@angular/core';
import { NgIf } from '@angular/common';
import { Router, ActivatedRoute } from '@angular/router';

import { UserService } from './../_core/user/user.service';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent implements OnInit {

  constructor(private router: Router, private user: UserService) {
  }

  ngOnInit() {
    if(this.user.getLoggedIn()){
      this.router.navigate['/'];
    }
  }

}
