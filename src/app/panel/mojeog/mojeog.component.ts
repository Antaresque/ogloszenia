import { OgloszeniaService } from './../../_core/ogloszenia/ogloszenia.service';
import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Http } from '@angular/http';

@Component({
  selector: 'app-mojeog',
  templateUrl: './mojeog.component.html',
  styleUrls: ['./mojeog.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class MojeogComponent implements OnInit {

  sub: any;
  model: any = {}
  wyniki: any = []
  img_path: string;
  noresults = false;

  constructor(private route: ActivatedRoute, private router: Router, private ogl: OgloszeniaService, private http: Http) { }

  ngOnInit() {
    this.sub = this.route.queryParams.subscribe(
      params => {
        this.model['id_uz'] = params['id_uz'] || null;
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
