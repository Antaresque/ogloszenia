import { Router } from '@angular/router';
import { KategorieService } from './../../_core/kategorie/kategorie.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home-kategorie',
  templateUrl: './home-kategorie.component.html',
  styleUrls: ['./home-kategorie.component.css']
})
export class HomeKategorieComponent implements OnInit {

  dane: any = [];

  constructor(private kat: KategorieService, private router: Router) { }

  ngOnInit() {
    this.kat.select_all().subscribe(
      res => { this.dane = res}
    );
  }

  wyszukaj(id_kat){
    this.router.navigate(['/wyszukiwarka'], {queryParams: {kategoria: id_kat}});
  }

}
