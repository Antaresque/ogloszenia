import { KategorieService } from './../_core/kategorie/kategorie.service';
import { OgloszeniaService } from './../_core/ogloszenia/ogloszenia.service';
import { Wojewodztwa } from './../_core/ogloszenia/wojewodztwa.class';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  kategorie: any = []
  model: any = {}
  promowane: any = []
  wojewodztwa = Wojewodztwa.wojewodztwa;

  constructor(private router: Router, private ogl: OgloszeniaService, private kat: KategorieService) { }

  ngOnInit() {
    this.ogl.promowane().subscribe(
      res => this.promowane = JSON.parse(res['_body']),
      err => console.log(err)
    );

    this.kat.select_all().subscribe(
      res => { this.kategorie = JSON.parse(res['_body'])
               console.log(this.kategorie);}
    );
  }

  search(){
    this.router.navigate(['/wyszukiwarka'], {queryParams: {nazwa: this.model.nazwa, kategoria: this.model.kategoria}});
  }

}
