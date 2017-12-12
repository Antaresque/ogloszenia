import { AuthHttp } from 'angular2-jwt';
import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions, Response } from '@angular/http';
import { UserService } from './../user/user.service';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class WiadomosciService {

  private API_LINK = 'http://localhost/angular/php/api.php/';

  constructor(private http: Http, private ahttp: AuthHttp) {}


  insert(model){
    return this.ahttp.post(this.API_LINK + 'wiadomosci/insert', model).map(res => res.json()).catch(err => Observable.throw(err.json()));
  }
  search(id){
    return this.ahttp.post(this.API_LINK + 'wiadomosci/search', {id: id}).map(res => res.json()).catch(err => Observable.throw(err.json()));
  }
  wyslane(id){
    return this.ahttp.post(this.API_LINK + 'wiadomosci/wyslane', {id: id}).map(res => res.json()).catch(err => Observable.throw(err.json()));
  }
  odebrane(id){
    return this.ahttp.post(this.API_LINK + 'wiadomosci/odebrane', {id: id}).map(res => res.json()).catch(err => Observable.throw(err.json()));
  }

}
