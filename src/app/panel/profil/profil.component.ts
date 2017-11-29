import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { UserService } from '../../_core/user/user.service';
@Component({
  selector: 'app-profil',
  templateUrl: './profil.component.html',
  styleUrls: ['./profil.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class ProfilComponent implements OnInit {
  dane: any = {}
  constructor(private user: UserService) { }

  ngOnInit() {
    this.user.data_user().subscribe(
      response => { this.dane = JSON.parse(response['_body'])},
      error => {console.log(error);});
  }
}
