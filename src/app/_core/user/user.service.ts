import { Injectable } from '@angular/core';
import { User } from './user.class';
import { Http, Headers, RequestOptions, Response } from '@angular/http';

@Injectable()
export class UserService {

  private isUserLoggedIn;
  private username;

  constructor(private http: Http) {
    this.isUserLoggedIn = false;
  }

  setUserLoggedIn(temp: boolean){
    this.isUserLoggedIn = temp;
  }
  getUserLoggedIn(){
    return this.isUserLoggedIn;
  }

  login(user) {
    return this.http.post('http://localhost/angular/php/login.php', user);
  }

  insert(user) {
    return this.http.post('http://localhost/angular/php/register.php', user);
  }

  private jwt() {
    // create authorization header with jwt token
    let currentUser = JSON.parse(localStorage.getItem('currentUser'));
    if (currentUser && currentUser.token) {
        let headers = new Headers({ 'Authorization': 'Bearer ' + currentUser.token });
        return new RequestOptions({ headers: headers });
    }
}
}
