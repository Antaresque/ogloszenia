import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions, Response } from '@angular/http';
import { UserService } from './../user/user.service';

@Injectable()
export class OgloszeniaService {

  constructor(private http: Http, private user: UserService) {}

  // ogloszenia api functions
  /**
   * Get data thro POST request from database.
   *
   * @param {int} id ID of advertisement.
   */
  select(id) {
    return this.http.post('http://localhost/angular/php/ogloszenie.php', id);
  }

  /**
   * Get names of images thro POST request from database.
   *
   * @param {int} id ID of advertisement.
   */
  select_zdj(id) {
    return this.http.post('http://localhost/angular/php/ogloszeniezdjecia.php', id);
  }

  /**
   * Get names of categories thro POST request from database.
   *
   * @param {int} id ID of advertisement.
   */
  select_kat(id) {
    return this.http.post('http://localhost/angular/php/ogloszeniekategorie.php', id);
  }

  /**
   * Send POST request to server to create new advertisement.
   *
   * @param {Ogloszenie} model JSON array with data (Ogloszenie class).
   */
  create(model) {
    return this.http.post('http://localhost/angular/php/ogloszeniecreate.php', model, {headers: this.user.headers});
  }

  /**
   * Send POST request to server to delete new advertisement.
   *
   * @param {int} model id ID of advertisement.
   */
  delete(id) {
    return this.http.post('http://localhost/angular/php/ogloszeniedelete.php', id, {headers: this.user.headers});
  }

}
