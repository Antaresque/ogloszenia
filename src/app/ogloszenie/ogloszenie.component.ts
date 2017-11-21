import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Http } from '@angular/http';

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

  constructor(private route: ActivatedRoute, private http: Http) { }

  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
      this.id = +params['id'];
    });

    const data = {'id': this.id };
    this.http.post('http://localhost/angular/php/ogloszenie.php', data).subscribe(
      res => { this.dane = JSON.parse(res['_body']); }
    );
    this.http.post('http://localhost/angular/php/ogloszeniezdjecia.php', data).subscribe(
      res => { this.zdjecia = JSON.parse(res['_body']); }
    );
  }
}
