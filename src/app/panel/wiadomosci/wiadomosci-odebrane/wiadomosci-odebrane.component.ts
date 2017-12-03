import { UserService } from './../../../_core/user/user.service';
import { WiadomosciService } from './../../../_core/wiadomosci/wiadomosci.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-wiadomosci-odebrane',
  templateUrl: './wiadomosci-odebrane.component.html',
  styleUrls: ['./wiadomosci-odebrane.component.css']
})
export class WiadomosciOdebraneComponent implements OnInit {

  wiadomosci: any = [];
  noresults: boolean = false;

  constructor(private wiad: WiadomosciService, private user: UserService) { }

  ngOnInit() {
    let id = this.user.getPayload()['id'];
    this.wiad.odebrane(id).subscribe(
      res => {
        this.wiadomosci = JSON.parse(res['_body']);
        console.log(this.wiadomosci);
        if(this.wiadomosci == null) this.noresults = true;
        else {
          this.noresults = false;
          for(let i = 0; i < this.wiadomosci.length; i++){
            console.log(this.wiadomosci[i].id_nad);
            this.user.dataPublic(this.wiadomosci[i].id_nad).subscribe(
              res => {
                this.wiadomosci[i]['nadawca'] = JSON.parse(res['_body']);
              }
            )
          }
        }
      }
    )
  }
}
