import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions, Response } from '@angular/http';
import { UserService } from './../user/user.service';

@Injectable()
export class WiadomosciService {

  constructor(private http: Http, private user: UserService) {}

  get headers(): Headers{
    return this.user.headers;
  }

  insert(model){
    return this.http.post('http://localhost/angular/php/wiadomosci_insert.php', model, {headers: this.headers})
  }
  search(id){
    return this.http.post('http://localhost/angular/php/wiadomosci_search.php', {id: id}, {headers: this.headers})
  }
  wyslane(id){
    return this.http.post('http://localhost/angular/php/wiadomosci_wyslane.php', {id: id}, {headers: this.headers})
  }
  odebrane(id){
    return this.http.post('http://localhost/angular/php/wiadomosci_odebrane.php', {id: id}, {headers: this.headers})
  }

}
