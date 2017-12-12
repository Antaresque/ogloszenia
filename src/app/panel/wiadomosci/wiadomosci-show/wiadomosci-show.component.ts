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

  constructor(private wiad: WiadomosciService, private route: ActivatedRoute, private router: Router) {
    this.route.params.subscribe(
      params => this.id = params['id']);
   }

  ngOnInit() {
    this.wiad.search(this.id).subscribe(
      res => {this.dane = res; console.log(this.dane)}
    )
  }
  sendMessage(){
    this.router.navigate(['/panel/wiadomosci/new'], {queryParams: {nazwa: 'Re: '+this.dane.tytul, odbiorca: this.dane.nadawca}});
  }
}
