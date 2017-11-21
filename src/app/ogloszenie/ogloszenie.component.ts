import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Http } from '@angular/http';
import { OgloszeniaService } from '../_core/ogloszenia/ogloszenia.service';

@Component({
  selector: 'app-ogloszenie',
  templateUrl: './ogloszenie.component.html',
  styleUrls: ['./ogloszenie.component.css']
})
export class OgloszenieComponent implements OnInit {

  sub: any;
  id: number;
  dane: JSON;
  zdjecia: JSON;

  constructor(private route: ActivatedRoute, private ogloszenia: OgloszeniaService) { }

  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
      this.id = +params['id'];
    });ss

    const data = {'id': this.id };
    this.ogloszenia.select(data).subscribe(
      res => { this.dane = JSON.parse(res['_body']); }
    );
    this.ogloszenia.select_zdj(data).subscribe(
      res => { this.zdjecia = JSON.parse(res['_body']); }
    );
  }
}
