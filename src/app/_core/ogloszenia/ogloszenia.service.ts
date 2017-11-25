import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions, Response } from '@angular/http';
import { UserService } from './../user/user.service';

@Injectable()
export class OgloszeniaService {

  constructor(private http: Http, private user: UserService) {}

  get headers(): Headers{
    return this.user.headers;
  }

  // ogloszenia api functions
  /**
   * Get data thro POST request from database.
   *
   * @param {int} id ID of advertisement.
   */
  select(id) {
    return this.http.post('http://localhost/angular/php/ogloszenie_select.php', id, {headers: this.headers});
  }

  /**
   * Get names of images thro POST request from database.
   *
   * @param {int} id ID of advertisement.
   */
  select_zdj(id) {
    return this.http.post('http://localhost/angular/php/ogloszenie_zdjecia.php', id, {headers: this.headers});
  }

  /**
   * Get names of categories thro POST request from database.
   *
   * @param {int/json} id ID/IDs of advertisement.
   */
  select_kat(id) {
    return this.http.post('http://localhost/angular/php/ogloszenie_kategorie.php', id, {headers: this.headers});
  }

  /**
   * Send POST request to server to create new advertisement.
   *
   * @param {Ogloszenie} model JSON array with data (Ogloszenie class).
   */
  create(model) {
    return this.http.post('http://localhost/angular/php/ogloszenie_create.php', model, {headers: this.headers});
  }

  upload_img(formData){
    let up_headers = this.headers;
    up_headers.delete('Content-Type');
    console.log(up_headers);
    return this.http.post('http://localhost/angular/php/ogloszenie_uploadzdj.php', formData, {headers: up_headers});
  }


  /**
   * Send POST request to server to delete new advertisement.
   *
   * @param {int} id ID of advertisement.
   */
  delete(id) {
    return this.http.post('http://localhost/angular/php/ogloszenie_delete.php', id, {headers: this.headers});
  }

  /**
   * Send POST request to server to change advertisement data.
   *
   * @param {JSON} model JSON array with data (need ID of ad).
   */
  change(model) {
    return this.http.post('http://localhost/angular/php/ogloszenie_change.php', model, {headers: this.headers});
  }

}
