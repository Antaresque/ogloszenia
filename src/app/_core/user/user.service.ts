import { AuthHttp, tokenNotExpired, JwtHelper } from 'angular2-jwt';
import { Injectable } from '@angular/core';
import { User } from './user.class';
import { Http, Headers, RequestOptions, Response } from '@angular/http';
import { Subject } from 'rxjs/Subject';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class UserService {

  private API_LINK = 'http://localhost/angular/php/api.php/';

  jwtHelper: JwtHelper = new JwtHelper();

  logged$: Observable<boolean>;
  public loggedSubject = new Subject<boolean>();

  constructor(private http: Http, private ahttp: AuthHttp) {
    this.logged$ = this.loggedSubject.asObservable();
    this.logged = tokenNotExpired();
  }

    /**
     *  Update service boolean value based on JWT token and return its value.
     */
    set logged(value){
      console.log(value);
      this.loggedSubject.next(value);
    }

    get logged(){
      return tokenNotExpired();
    }
    /**
     * Save JWT token from server to localStorage.
     *
     * @param {string} jwt_temp  JWT token given from server.
     */
    setJWT(jwt_temp) { // po zalogowaniu chyba
      localStorage.setItem('token', jwt_temp);
      this.logged = tokenNotExpired();
    }

    /**
     * Destroy token and log out user.
     */
    logout() {
      localStorage.removeItem('token');
      this.logged = false;
    }

    getPayload(){
      let token = localStorage.getItem('token');
      return this.jwtHelper.decodeToken(token);
    }

  // POST requests below

  /**
   * Send POST request to server to authorizate user.
   * Returns login_request (boolean) and jwt (string) if previous variable was true.
   *
   * @param {JSON} user JSON array with login and password.
   */
  login(user) {
    return this.http.post(this.API_LINK + 'auth/login', user).map(res => res.json()).catch(err => Observable.throw(err.json()));
  }

  /**
   * Send POST request to server to create new user.
   *
   * @param {User} user JSON array with user data (User class).
   */
  insert(user) {
    return this.http.post(this.API_LINK + 'auth/register', user).map(res => res.json()).catch(err => Observable.throw(err.json()));
  }

  /**
   * Send POST request to server to delete a user. (admin or own account)
   *
   * @param {int} id ID of user.
   *
   */
  delete(id) {
    return this.ahttp.post(this.API_LINK + 'user/delete',  {id: id}).map(res => res.json()).catch(err => Observable.throw(err.json()));
  }


  /**
   * Get all non-confidental data about user thro POST request from database.
   *
   * @param {int} id ID of user.
   */
  data(id){
    return this.http.post(this.API_LINK + 'user/data', {id: id, type: 'free'}).map(res => res.json()).catch(err => Observable.throw(err.json()));
  }

  /** Get data about currently logged user thro POST request from database.
   *
   */
  data_user(){
    let payload = this.getPayload();
    return this.ahttp.post(this.API_LINK + 'user/data', {id: payload.id}).map(res => res.json()).catch(err => Observable.throw(err.json()));
  }
  /**
   * Get data for buyer (like bank account) about user thro POST request from database.
   * (need token authorization)
   *
   * @param {int} id ID of user.
   */
  dataPublic(id){
    return this.ahttp.post(this.API_LINK + 'user/data', {id: id, type: 'public'}).map(res => res.json()).catch(err => Observable.throw(err.json()));
  }

  /**
   * Get data about owner of account thro POST request from database.
   * (need token authorization)
   */
  dataPrivate(id){
    return this.ahttp.post(this.API_LINK + 'user/data', {id: id, type: 'private'}).map(res => res.json()).catch(err => Observable.throw(err.json()));
  }

  /**
   * Change data about owner of account thro POST request from database.
   * (need token authorization)
   *
   * @param {JSON} model Data to change - key equals column name in database (need ID of user).
   */
  changeData(model){
    return this.ahttp.post(this.API_LINK + 'user/change', model).map(res => res.json()).catch(err => Observable.throw(err.json()));
  }

  /**
   * Upload avatar of user thro POST request.
   * (need token authorization)
   *
   * @param {FormData} formData Image uploaded by website.
   */
  uploadAvatar(formData){
    return this.ahttp.post(this.API_LINK + 'user/avatar', formData).map(res => res.json()).catch(err => Observable.throw(err.json()));
  }

  search_name(nazwa){
    return this.http.post(this.API_LINK + 'user/search_name', {nazwa: nazwa}).map(res => res.json()).catch(err => Observable.throw(err.json()));
  }

  obs_add(id_og){
    return this.ahttp.post(this.API_LINK + 'obserwowane/add', {id_og: id_og}).map(res => res.json()).catch(err => Observable.throw(err.json()));
  }

  obs_select(){
    return this.ahttp.post(this.API_LINK + 'obserwowane/select', {type: 'id'}).map(res => res.json()).catch(err => Observable.throw(err.json()));
  }

  obs_select_detailed(){
    return this.ahttp.post(this.API_LINK + 'obserwowane/select', {type: 'detailed'}).map(res => res.json()).catch(err => Observable.throw(err.json()));
  }

  obs_delete(id_og){
    return this.ahttp.post(this.API_LINK + 'obserwowane/delete', {id_og: id_og}).map(res => res.json()).catch(err => Observable.throw(err.json()));
  }



  // tylko do testów

  testfirst(){
    return this.http.get(this.API_LINK + 'test').map(res => res.json()).catch(err => Observable.throw(err.json()));
  }
}
