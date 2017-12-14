import { UserService } from './../../../_core/user/user.service';
import { ActivatedRoute, Router } from '@angular/router';
import { WiadomosciService } from './../../../_core/wiadomosci/wiadomosci.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-wiadomosci-show',
  templateUrl: './wiadomosci-show.component.html',
  styleUrls: ['./wiadomosci-show.component.css']
})
export class WiadomosciShowComponent implements OnInit {

  id: number;
  dane: any = {};
  ownerMsg: boolean;

  constructor(private user: UserService, private wiad: WiadomosciService, private route: ActivatedRoute, private router: Router) {
    this.route.params.subscribe(
      params => this.id = params['id']);
   }

  ngOnInit() {
    this.wiad.search(this.id).subscribe(
      res => {
        this.dane = res;
        console.log(this.dane)
        this.ownerMsg = this.dane.id_nad == this.user.getPayload().id;
      }
    )
  }

  sendMessage(){
    this.router.navigate(['/panel/wiadomosci/new'], {queryParams: {nazwa: 'Re: '+this.dane.tytul, odbiorca: this.dane.nadawca}});
  }
}
