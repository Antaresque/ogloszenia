import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions, Response } from '@angular/http';

@Injectable()
export class OgloszeniaService {

  constructor(private http: Http) {}

  // ogloszenia api functions
  select(id) {
    return this.http.post('http://localhost/angular/php/ogloszenie.php', id);
  }

  select_zdj(id) {
    return this.http.post('http://localhost/angular/php/ogloszeniezdjecia.php', id);
  }
}
