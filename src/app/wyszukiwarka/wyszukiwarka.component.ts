import { OgloszeniaService } from './../_core/ogloszenia/ogloszenia.service';
import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-wyszukiwarka',
  templateUrl: './wyszukiwarka.component.html',
  styleUrls: ['./wyszukiwarka.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class WyszukiwarkaComponent implements OnInit {

  sub: any;
  model: any = {}
  wyniki: any = []

  constructor(private route: ActivatedRoute, private router: Router, private ogl: OgloszeniaService) { }

  ngOnInit() {
    this.sub = this.route.queryParams.subscribe(
      params => {
        this.model['kategoria'] = params['kategoria'] || null;
        this.model['nazwa'] = params['nazwa'] || null;
        this.model['region'] = params['region'] || null;
    });

    console.log(this.model);

    this.ogl.search(this.model).subscribe(
      res => {
        this.wyniki = JSON.parse(res['_body']); //zrobic jakis template jezeli nie ma wynikow =w=
      },
      err => console.log(err)
    );
  }

  ngOnDestroy(){
    this.sub.unsubscribe();
  }

}
