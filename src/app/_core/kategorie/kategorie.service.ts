import { UserService } from './../user/user.service';
import { Http, Headers, RequestOptions, Response } from '@angular/http';
import { Injectable } from '@angular/core';

@Injectable()
export class KategorieService {

  constructor(private user: UserService, private http: Http) { }

  get headers(): Headers{
    return this.user.headers;
  }

  // kategoria api functions
  /**
   * Get name of category thro POST request from database.
   *
   * @param {int} id ID of category.
   */
  select(id){
    return this.http.post('http://localhost/angular/php/kat_select.php', {id: id}, {headers: this.headers});
  }

  /**
   * Get all categories thro POST request from database.
   */
  select_all(){
    return this.http.post('http://localhost/angular/php/kat_select_all.php', '', {headers: this.headers});
  }

  /**
   * Get subcategories thro POST request from database.
   *
   * @param {int} id ID of main category.
   */
  select_podrz(id) {
    return this.http.post('http://localhost/angular/php/kat_nad_select.php', {id: id}, {headers: this.headers});
  }

  /**
   * Send POST request to server to create new category.
   *
   * @param {JSON} model JSON array with data.
   */
  create(model) {
    return this.http.post('http://localhost/angular/php/kat_create.php', model, {headers: this.headers});
  }

  /**
   * Send POST request to server to create new subcategory.
   *
   * @param {JSON} model JSON array with data.
   */
  create_podrz(model) {
    return this.http.post('http://localhost/angular/php/kat_nad_create.php', model, {headers: this.headers});
  }

  /**
   * Send POST request to server to delete category.
   *
   * @param {int} id ID of category.
   */
  delete(id) {
    return this.http.post('http://localhost/angular/php/kat_delete.php', {id: id}, {headers: this.headers});
  }

  /**
   * Send POST request to server to change category.
   *
   * @param {int} model Data of category.
   */
  change(model){
    return this.http.post('http://localhost/angular/php/kat_delete.php', model, {headers: this.headers});
  }

}
