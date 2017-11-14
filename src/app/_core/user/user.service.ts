import { Injectable } from '@angular/core';

@Injectable()
export class UserService {

  private isUserLoggedIn;
  private username;

  constructor() {
    this.isUserLoggedIn = false;
  }

  setUserLoggedIn(temp : boolean){
    this.isUserLoggedIn = temp;
  }
  getUserLoggedIn(){
    return this.isUserLoggedIn;
  }

}
