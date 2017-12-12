import { UserService } from './../../../_core/user/user.service';
import { WiadomosciService } from './../../../_core/wiadomosci/wiadomosci.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-wiadomosci-odebrane',
  templateUrl: './wiadomosci-odebrane.component.html',
  styleUrls: ['./wiadomosci-odebrane.component.css']
})
export class WiadomosciOdebraneComponent implements OnInit {

  wiadomosci: any = [];
  noresults: boolean = false;

  constructor(private wiad: WiadomosciService, private user: UserService, private router: Router) { }

  ngOnInit() {
    let id = this.user.getPayload()['id'];
    this.wiad.odebrane(id).subscribe(
      res => {
        this.wiadomosci = res;
        if(this.wiadomosci.length == 0) this.noresults = true;
        else {
          this.noresults = false;
          for(let i = 0; i < this.wiadomosci.length; i++){
            this.user.dataPublic(this.wiadomosci[i].id_nad).subscribe(
              res => {
                this.wiadomosci[i]['nadawca'] = res;
              }
            )
          }
        }
      }
    )
  }

  sendMessage(){
    this.router.navigate(['/panel/wiadomosci/new']);
  }
}
