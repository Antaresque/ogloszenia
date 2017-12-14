import { AuthHttp } from 'angular2-jwt';
import { UserService } from './../user/user.service';
import { Http, Headers, RequestOptions, Response } from '@angular/http';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/throw';

@Injectable()
export class KategorieService {

  private API_LINK = 'http://localhost/angular/php/api.php/';

  constructor(private http: Http, private ahttp: AuthHttp) { }

  // kategoria api functions
  /**
   * Get name of category thro POST request from database.
   *
   * @param {int} id ID of category.
   */
  select(id){
    return this.http.post(this.API_LINK + 'kategorie/select', {id: id}).map(res => res.json()).catch(err => Observable.throw(err.json()));
  }

  /**
   * Get all categories thro POST request from database.
   */
  select_all(){
    return this.http.get(this.API_LINK + 'kategorie').map(res => res.json()).catch(err => Observable.throw(err.json()));
  }

  /**
   * Get subcategories thro POST request from database.
   *
   * @param {int} id ID of main category.
   */
  select_podrz(id) {
    return this.http.post(this.API_LINK + 'kategorie/nad_select', {id: id}).map(res => res.json()).catch(err => Observable.throw(err.json()));
  }

  /**
   * Get tree of categories thro POST request from database.
   *
   * @param {int} id ID of child category.
   */

  select_tree(id){
    return this.http.post(this.API_LINK + 'kategorie/tree', {id: id}).map(res => res.json()).catch(err => Observable.throw(err.json()));
  }
  /**
   * Get attributes of categories thro POST request from database.
   *
   * @param {int} id ID of child category.
   */

  select_attr(id){
    return this.http.post(this.API_LINK + 'kategorie/atrybuty', {id: id}).map(res => res.json()).catch(err => Observable.throw(err.json()));
  }
  /**
   * Send POST request to server to create new category.
   *
   * @param {JSON} model JSON array with data.
   */
  create(model) {
    return this.ahttp.post(this.API_LINK + 'kategorie/create', model).map(res => res.json()).catch(err => Observable.throw(err.json()));
  }

  /**
   * Send POST request to server to create new subcategory.
   *
   * @param {JSON} model JSON array with data.
   */
  create_podrz(model) {
    return this.ahttp.post(this.API_LINK + 'kategorie/nad_create', model).map(res => res.json()).catch(err => Observable.throw(err.json()));
  }

  /**
   * Send POST request to server to delete category.
   *
   * @param {int} id ID of category.
   */
  delete(id) {
    return this.ahttp.post(this.API_LINK + 'kategorie/delete', {id: id}).map(res => res.json()).catch(err => Observable.throw(err.json()));
  }

  /**
   * Send POST request to server to change category.
   *
   * @param {int} model Data of category.
   */
  change(model){
    return this.ahttp.post(this.API_LINK + 'kategorie/change', model).map(res => res.json()).catch(err => Observable.throw(err.json()));
  }
}
