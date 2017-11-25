import { Router } from '@angular/router';
import { UserService } from './../../_core/user/user.service';
import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-ustawienia',
  templateUrl: './ustawienia.component.html',
  styleUrls: ['./ustawienia.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class UstawieniaComponent implements OnInit {

  loading = false;
  model: any = {};

  wojewodztwa = [
    ' ',
    'woj. dolnośląskie',
    'woj. kujawsko-pomorskie',
    'woj. lubelskie',
    'woj. lubuskie',
    'woj. łódzkie',
    'woj. małopolskie',
    'woj. mazowieckie',
    'woj. opolskie',
    'woj. podkarpackie',
    'woj. podlaskie',
    'woj. pomorskie',
    'woj. śląskie',
    'woj. świętokrzyskie',
    'woj. warmińsko-mazurskie',
    'woj. wielkopolskie',
    'woj. zachodniopomorskie'
    ];

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

}
