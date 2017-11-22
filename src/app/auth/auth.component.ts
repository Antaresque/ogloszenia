import { Component, OnInit, ViewChild } from '@angular/core';
import { NgIf } from '@angular/common';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent implements OnInit {

  subpage: string;
  login = false;

  constructor(private route: ActivatedRoute) {
  }

  ngOnInit() {
    this.subpage = this.route.snapshot.data['subpage'];
    if(this.subpage == 'login') this.login = true;
    console.log(this.login)
  }

}
