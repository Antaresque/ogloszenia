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

  promowane: any = []
  wojewodztwa = Wojewodztwa.wojewodztwa;
  img_path: string;

  constructor(private router: Router, private ogl: OgloszeniaService) { }

  ngOnInit() {
    this.img_path = this.ogl.img_path;

    this.ogl.promowane().subscribe(
      res => this.promowane = JSON.parse(res['_body']),
      err => console.log(err)
    );
  }
}
