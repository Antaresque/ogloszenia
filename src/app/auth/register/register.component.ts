import { Component, OnInit } from '@angular/core';
import { UserService } from '../../_core/user/user.service';
import { NgForm } from '@angular/forms';
import { NgModel } from '@angular/forms';
import { Http, Headers } from '@angular/http';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  wojewodztwa = [
    'Region',
    'woj. dolnośląskie',
    'woj. kujawsko-pomorskie',
    'woj. lubelskie',
    'woj. lubuskie',
    'woj. łódzkie',
    'woj. małopolskie',
    'woj. mazowieckie',
    'woj. opolskie',
    'woj. podkarpackie',
    'woj. podlaskie',
    'woj. pomorskie',
    'woj. śląskie',
    'woj. świętokrzyskie',
    'woj. warmińsko-mazurskie',
    'woj. wielkopolskie',
    'woj. zachodniopomorskie'
    ];

  constructor(private user: UserService, private http: Http) { }

  loading = false;
  model: any = {};

  ngOnInit() {
  }

  registerEvent() {
    this.loading = true;
    this.user.insert(this.model).subscribe(
          data => {
            this.loading = false;
        },
        error => {
            this.loading = false;
        });
    }
}
