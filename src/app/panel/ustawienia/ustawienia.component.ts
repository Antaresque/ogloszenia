import { Router } from '@angular/router';
import { UserService } from './../../_core/user/user.service';
import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Wojewodztwa } from '../../_core/ogloszenia/wojewodztwa.class';

@Component({
  selector: 'app-ustawienia',
  templateUrl: './ustawienia.component.html',
  styleUrls: ['./ustawienia.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class UstawieniaComponent implements OnInit {

  loading = false;
  model: any = {};

  wojewodztwa = Wojewodztwa.wojewodztwa;

  constructor(private user: UserService, private router: Router) { }

  ngOnInit() {
  }

  deleteAcc(){
    if(confirm('Czy na pewno chcesz usunąć konto?')){
      let payload = this.user.getPayload();
      this.user.logout();
      this.router.navigate['/'];
      this.user.delete(payload.id).subscribe(
        (res) => console.log(res)
      );
    }
  }

  changeData(){

  }
  changeMail()
{}
  changePassword(){

  }
}
