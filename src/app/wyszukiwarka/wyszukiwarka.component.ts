import { OgloszeniaService } from './../_core/ogloszenia/ogloszenia.service';
import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Http } from '@angular/http';

@Component({
  selector: 'app-wyszukiwarka',
  templateUrl: './wyszukiwarka.component.html',
  styleUrls: ['./wyszukiwarka.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class WyszukiwarkaComponent implements OnInit {

  model: any = {}
  wyniki: any = []
  img_path: string;
  noresults = false;

  constructor(private route: ActivatedRoute, private router: Router, private ogl: OgloszeniaService, private http: Http) { }

  ngOnInit() {
    this.route.queryParams.subscribe(
      params => {
        this.model['kategoria'] = params['kategoria'] || null;
        this.model['nazwa'] = params['nazwa'] || null;
        this.model['region'] = params['region'] || null;
    });

    console.log(this.model);
    this.img_path = this.ogl.img_path;

    this.ogl.search(this.model).subscribe(
      res => {
        let temp = JSON.parse(res['_body']);
        console.log(temp);
        if(temp.hasOwnProperty('result')) this.noresults = true;
        else this.wyniki = temp;
      },
      err => console.log(err)
    );
  }
}
