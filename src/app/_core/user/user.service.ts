import { Injectable } from '@angular/core';
import { User } from './user.class';
import { Http, Headers, RequestOptions, Response } from '@angular/http';
import { Subject } from 'rxjs/Subject';

@Injectable()
export class UserService {

  private jwt: string;
  isLoggedIn: boolean;

  getLoggedIn(){
    this.isLoggedIn = this.checkLoggedIn();
    return this.isLoggedIn;
  }

  headers: Headers;

  constructor(private http: Http) {
    this.jwt = localStorage.getItem('token');
    this.isLoggedIn = this.checkLoggedIn();

    this.headers = new Headers();
    this.headers.append('Content-Type', 'application/json');
    if(this.isLoggedIn) this.headers.append("Authorization", "Bearer " + this.jwt);
  }

  setJWT(jwt_temp) { // po zalogowaniu chyba
    localStorage.setItem('token', jwt_temp);
    this.jwt = jwt_temp;
    this.isLoggedIn = this.checkLoggedIn();
  }

  getData() {
    const base64Url = this.jwt.split('.')[1];
    const base64 = base64Url.replace('-', '+').replace('_', '/');
    return JSON.parse(window.atob(base64));
  }

  checkLoggedIn() {
    return (this.jwt != null);
  }

  // user api functions
  login(user) {
    return this.http.post('http://localhost/angular/php/login.php', user, {headers: this.headers});
  }

  insert(user) {
    return this.http.post('http://localhost/angular/php/register.php', user, {headers: this.headers});
  }

  logout() {
    localStorage.removeItem('token');
    this.isLoggedIn = false;
  }
}
