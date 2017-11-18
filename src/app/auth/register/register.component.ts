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
    console.log(this.model);
    this.user.insert(this.model).subscribe(
          data => {
            console.log(data);
            this.loading = false;
        },
        error => {
            this.loading = false;
        });
    }


    /*this.http.post('http://localhost/angular/php/register.php', formData)
        .subscribe(res => this.user.setUserLoggedIn(res.json().login_result)),
                  (error) => console.log(error['_body']);
    }
    console.log('logged:', this.user.getUserLoggedIn());*/
}
