import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Http } from '@angular/http';
import { Ogloszenie } from '../_core/ogloszenia/ogloszenie.class';
import { OgloszeniaService } from '../_core/ogloszenia/ogloszenia.service';

@Component({
  selector: 'app-ogloszenie',
  templateUrl: './ogloszenie.component.html',
  styleUrls: ['./ogloszenie.component.css']
})
export class OgloszenieComponent implements OnInit {

  sub: any;
  id: number;
  dane: Ogloszenie;
  zdjecia: JSON;

  constructor(private route: ActivatedRoute, private ogloszenia: OgloszeniaService) { }

  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
      this.id = +params['id'];
    });

    this.ogloszenia.select(this.id).subscribe(
      res => { this.dane = JSON.parse(res['_body']); }
    );
    this.ogloszenia.select_zdj(this.id).subscribe(
      res => { this.zdjecia = JSON.parse(res['_body']);
    console.log(res); }
    );
  }
}
