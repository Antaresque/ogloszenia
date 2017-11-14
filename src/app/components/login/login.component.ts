import { Component, ViewChild } from '@angular/core';
import { Http } from '@angular/http';
import { UserService } from '../../_core/user/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent{

  logged : boolean = false;
  @ViewChild('login') loginInputBox;
  @ViewChild('pass') passInputBox;

  constructor(public http: Http, public user: UserService) {}

  loginEvent(){
    var name = this.loginInputBox.nativeElement.value;
    var pass = this.passInputBox.nativeElement.value;
    if(name.length == 0 || pass.length == 0) console.log('name/pass is null');
    else{
      if(!this.logged) this.logged = true;
      let formData = new FormData();
      formData.append('name', name);
      formData.append('pass', pass);

      this.http.post('http://localhost/angular/php/login.php', formData)
        .subscribe(res => this.user.setUserLoggedIn(res.json().login_result)),
                  (error) => console.log(error['_body']);
    }
    console.log('logged:', this.user.getUserLoggedIn());
  }

}
