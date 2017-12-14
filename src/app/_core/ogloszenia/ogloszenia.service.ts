import { AuthHttp, JwtHelper } from 'angular2-jwt';
import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions, Response } from '@angular/http';
import { UserService } from './../user/user.service';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/throw';


@Injectable()
export class OgloszeniaService {

  private API_LINK = 'http://localhost/angular/php/api.php/';
  public img_path = '../zdjecia/';

  constructor(private http: Http, private ahttp: AuthHttp) {}


  // ogloszenia api functions
  /**
   * Get data thro POST request from database.
   *
   * @param {int} id ID of advertisement.
   */
  select(id) {
    return this.http.post(this.API_LINK + 'ogloszenia/', {id: id}).map(res => res.json()).catch(err => Observable.throw(err.json()));
  }

  /**
   * Get names of images thro POST request from database.
   *
   * @param {int} id ID of advertisement.
   */
  select_zdj(id) {
    return this.http.post(this.API_LINK + 'ogloszenia/zdjecia', {id: id}).map(res => res.json()).catch(err => Observable.throw(err.json()));
  }

  /**
   * Search for advertisements fitting given parameters.
   *
   * @param {JSON} model Parameters with keys equal to database columns.
   */
  search(model){
    return this.http.post(this.API_LINK + 'ogloszenia/search', model).map(res => res.json()).catch(err => Observable.throw(err.json()));
  }

  /**
   * Send POST request to server to create new advertisement.
   *
   * @param {Ogloszenie} model JSON array with data (Ogloszenie class).
   */
  create(model) {
    return this.ahttp.post(this.API_LINK + 'ogloszenia/create', model).map(res => res.json()).catch(err => Observable.throw(err.json()));
  }

  /**
   * Upload adv image to server (for form)
   *
   * @param {formData} formData JSON array with image and id.
   */
  upload_img(formData){
    let token = localStorage.getItem('token');
    let up_headers = new Headers();
    up_headers.append('Authorization', 'Bearer '+token);
    console.log(up_headers);
    return this.http.post(this.API_LINK + 'ogloszenia/uploadzdj', formData, {headers: up_headers}).map(res => console.log(res)).catch(err => Observable.throw(err.json()));
  }


  /**
   * Send POST request to server to delete new advertisement.
   *
   * @param {int} id ID of advertisement.
   */
  delete(id) {
    return this.ahttp.post(this.API_LINK + 'ogloszenia/delete', {id: id}).map(res => res.json()).catch(err => Observable.throw(err.json()));
  }

  /**
   * Send POST request to server to change advertisement data.
   *
   * @param {JSON} model JSON array with data (need ID of ad).
   */
  change(model) {
    return this.ahttp.post(this.API_LINK + 'ogloszenia/change', model).map(res => res.json()).catch(err => Observable.throw(err.json()));
  }

  /**
   * Get 9 random featured advertisemets.
   *
   */
  promowane(){
    return this.http.get(this.API_LINK + 'ogloszenia/promowane').map(res => res.json()).catch(err => Observable.throw(err.json()));
  }

  /**
   * Search for advertisements fitting given parameters.
   *
   * @param {int} id ID of user.
   */
  search_by_user(id){
    return this.http.post(this.API_LINK + 'ogloszenia/select_user', {id: id}).map(res => res.json()).catch(err => Observable.throw(err.json()));
  }

  archiwum(id){
    return this.http.post(this.API_LINK + 'ogloszenia/select_user_inactive', {id: id}).map(res => res.json()).catch(err => Observable.throw(err.json));
  }
}
