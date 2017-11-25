import { RouterLink } from '@angular/router';
import { KategorieService } from './../../_core/kategorie/kategorie.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home-kategorie',
  templateUrl: './home-kategorie.component.html',
  styleUrls: ['./home-kategorie.component.css']
})
export class HomeKategorieComponent implements OnInit {

  dane: any = [];

  constructor(private kat: KategorieService) { }

  ngOnInit() {
    this.kat.select_all().subscribe(
      res => { this.dane = JSON.parse(res['_body'])
               console.log(this.dane);}
    );
  }

  wyszukaj(id_kat){
    console.log(id_kat);
  }

}
