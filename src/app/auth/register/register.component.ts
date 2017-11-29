import { Component, OnInit } from '@angular/core';
import { UserService } from '../../_core/user/user.service';
import { NgForm } from '@angular/forms';
import { NgModel } from '@angular/forms';
import { Http, Headers } from '@angular/http';
import { Wojewodztwa } from '../../_core/ogloszenia/wojewodztwa.class';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  wojewodztwa = Wojewodztwa.wojewodztwa;

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
