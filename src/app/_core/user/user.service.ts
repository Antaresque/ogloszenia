import { Injectable } from '@angular/core';
import { User } from './user.class';
import { Http, Headers, RequestOptions, Response } from '@angular/http';

@Injectable()
export class UserService {

  isLoggedIn: string;
  username: string;
  jwt: JSON;

  constructor(private http: Http) {}

  // user api functions
  login(user) {
    return this.http.post('http://localhost/angular/php/login.php', user);
  }

  insert(user) {
    return this.http.post('http://localhost/angular/php/register.php', user);
  }
}
