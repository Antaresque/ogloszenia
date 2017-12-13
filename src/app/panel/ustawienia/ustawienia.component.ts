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
  model2: any = {};
  model3: any = {};
  errors: any = [];

  wojewodztwa = Wojewodztwa.wojewodztwa;

  constructor(private user: UserService, private router: Router) { }

  ngOnInit() {
    let payload = this.user.getPayload();
    this.user.dataPublic(payload.id).subscribe(
      res => this.model = res,
      err => this.errors = err
    )
  }

  changeData(){}
  changeMail(){}
  changePassword(){}
}
