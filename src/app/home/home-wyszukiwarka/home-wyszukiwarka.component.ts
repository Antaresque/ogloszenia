import { KategorieService } from './../../_core/kategorie/kategorie.service';
import { Router } from '@angular/router';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-home-wyszukiwarka',
  templateUrl: './home-wyszukiwarka.component.html',
  styleUrls: ['./home-wyszukiwarka.component.css']
})
export class HomeWyszukiwarkaComponent implements OnInit {

  model: any = {}
  kategorie: any = []

  constructor(private router: Router, private kat: KategorieService) { }

  ngOnInit() {
    this.kat.select_all().subscribe(
      res => { this.kategorie = JSON.parse(res['_body'])}
    );
  }

  search(){
    if(this.model.kategoria == "") this.model.kategoria = null;
    this.router.navigate(['/wyszukiwarka'], {queryParams: {nazwa: this.model.nazwa, kategoria: this.model.kategoria}});
  }
}
