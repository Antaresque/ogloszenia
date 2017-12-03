import { UserService } from './../../../_core/user/user.service';
import { WiadomosciService } from './../../../_core/wiadomosci/wiadomosci.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-wiadomosci-wyslane',
  templateUrl: './wiadomosci-wyslane.component.html',
  styleUrls: ['./wiadomosci-wyslane.component.css']
})
export class WiadomosciWyslaneComponent implements OnInit {

  wiadomosci: any = [];
  noresults: boolean = false;

  constructor(private wiad: WiadomosciService, private user: UserService) { }

  ngOnInit() {
    let id = this.user.getPayload()['id'];
    this.wiad.wyslane(id).subscribe(
      res => {
        this.wiadomosci = JSON.parse(res['_body']);
        if(this.wiadomosci == null) this.noresults = true;
        else {
          this.noresults = false;
          for(let i = 0; i < this.wiadomosci.length; i++){
            this.user.dataPublic(this.wiadomosci[i].id_od).subscribe(
              res => {
                this.wiadomosci[i]['odbiorca'] = JSON.parse(res['_body']);
              }
            )
          }
        }
      }
    )
  }
}
